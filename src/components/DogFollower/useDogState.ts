import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimationState, Direction, Position } from './types';
import { IDLE_ANIMATIONS, SPRITE_CONFIG } from './config';
import { dogSound } from './sound';

function clampToViewport(pos: Position): Position {
  if (typeof window === 'undefined') return pos;
  const maxX = window.innerWidth - SPRITE_CONFIG.renderedWidth;
  const maxY = window.innerHeight - SPRITE_CONFIG.renderedHeight;
  return {
    x: Math.max(0, Math.min(pos.x, maxX)),
    y: Math.max(0, Math.min(pos.y, maxY)),
  };
}

function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

interface UseDogStateReturn {
  position: Position;
  animation: AnimationState;
  direction: Direction;
  isVisible: boolean;
  onAnimationEnd: () => void;
}

export function useDogState(): UseDogStateReturn {
  const isTouch = typeof window !== 'undefined' && isTouchDevice();

  const [position, setPosition] = useState<Position>(() => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    if (isTouch) {
      return {
        x: 0,
        y: window.innerHeight - SPRITE_CONFIG.renderedHeight - SPRITE_CONFIG.mobileBottomOffset,
      };
    }
    return {
      x: window.innerWidth - SPRITE_CONFIG.renderedWidth - 20,
      y: 20,
    };
  });
  const [targetPosition, setTargetPosition] = useState<Position>(position);
  const [idleAnimation, setIdleAnimation] = useState<AnimationState>('sitting');
  const [direction, setDirection] = useState<Direction>('left');
  const [isIdle, setIsIdle] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [hasReachedTarget, setHasReachedTarget] = useState(true);
  const [boostLevel, setBoostLevel] = useState(0);

  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastIdleAnimationRef = useRef<AnimationState | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const boostDecayRef = useRef<NodeJS.Timeout | null>(null);
  const positionRef = useRef(position);
  const isIdleRef = useRef(isIdle);
  const hasReachedTargetRef = useRef(hasReachedTarget);
  const prevScrollYRef = useRef(0);

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    isIdleRef.current = isIdle;
  }, [isIdle]);

  useEffect(() => {
    hasReachedTargetRef.current = hasReachedTarget;
  }, [hasReachedTarget]);

  const selectRandomIdle = useCallback((): AnimationState => {
    const available = IDLE_ANIMATIONS.filter((a) => a !== lastIdleAnimationRef.current);
    const selected = available[Math.floor(Math.random() * available.length)];
    lastIdleAnimationRef.current = selected;
    return selected;
  }, []);

  // Mouse tracking (desktop only)
  useEffect(() => {
    if (typeof window === 'undefined' || isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newTarget = clampToViewport({
        x: e.clientX - SPRITE_CONFIG.cursorOffset.x,
        y: e.clientY - SPRITE_CONFIG.cursorOffset.y,
      });

      if (isIdleRef.current && hasReachedTargetRef.current) {
        const dx = newTarget.x - positionRef.current.x;
        const dy = newTarget.y - positionRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < SPRITE_CONFIG.idleDeadZone) {
          return;
        }
      }

      setTargetPosition(newTarget);
      isIdleRef.current = false;
      setIsIdle(false);
      hasReachedTargetRef.current = false;
      setHasReachedTarget(false);

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      idleTimerRef.current = setTimeout(() => {
        isIdleRef.current = true;
        setIsIdle(true);
        if (hasReachedTargetRef.current) {
          setIdleAnimation(selectRandomIdle());
        }
      }, SPRITE_CONFIG.idleThreshold);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, [selectRandomIdle, isTouch]);

  // Scroll tracking (mobile only)
  useEffect(() => {
    if (typeof window === 'undefined' || !isTouch) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

      const targetX = scrollProgress * (window.innerWidth - SPRITE_CONFIG.renderedWidth);
      const targetY = window.innerHeight - SPRITE_CONFIG.renderedHeight - SPRITE_CONFIG.mobileBottomOffset;

      // Determine direction from scroll
      if (scrollY > prevScrollYRef.current) {
        setDirection('right');
      } else if (scrollY < prevScrollYRef.current) {
        setDirection('left');
      }
      prevScrollYRef.current = scrollY;

      setTargetPosition(clampToViewport({ x: targetX, y: targetY }));
      isIdleRef.current = false;
      setIsIdle(false);
      hasReachedTargetRef.current = false;
      setHasReachedTarget(false);

      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      idleTimerRef.current = setTimeout(() => {
        isIdleRef.current = true;
        setIsIdle(true);
        if (hasReachedTargetRef.current) {
          setIdleAnimation(selectRandomIdle());
        }
      }, SPRITE_CONFIG.scrollIdleThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, [selectRandomIdle, isTouch]);

  // Visibility handling (desktop only)
  useEffect(() => {
    if (typeof window === 'undefined' || isTouch) return;

    const handleLeave = () => setIsVisible(true);
    const handleEnter = () => setIsVisible(true);

    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [isTouch]);

  // Click/tap handler for speed boost
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleClick = () => {
      setBoostLevel((prev) => Math.min(prev + 1, SPRITE_CONFIG.maxBoostClicks));
      dogSound.playBark();
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // Boost decay over time
  useEffect(() => {
    if (boostLevel === 0) return;

    boostDecayRef.current = setTimeout(() => {
      setBoostLevel((prev) => Math.max(prev - 1, 0));
    }, SPRITE_CONFIG.boostDecayInterval);

    return () => {
      if (boostDecayRef.current) {
        clearTimeout(boostDecayRef.current);
      }
    };
  }, [boostLevel]);

  // Movement loop
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const boostRatio = boostLevel / SPRITE_CONFIG.maxBoostClicks;
    const speedMultiplier = 1 + boostRatio * (SPRITE_CONFIG.maxSpeedMultiplier - 1);
    const currentSpeed = SPRITE_CONFIG.walkSpeed * speedMultiplier;

    const updatePosition = () => {
      setPosition((currentPos) => {
        const dx = targetPosition.x - currentPos.x;
        const dy = targetPosition.y - currentPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < currentSpeed) {
          if (!hasReachedTargetRef.current) {
            hasReachedTargetRef.current = true;
            setHasReachedTarget(true);
            setBoostLevel(0);
            if (!isTouch && SPRITE_CONFIG.cursorOffset.x !== 0) {
              setDirection(SPRITE_CONFIG.cursorOffset.x < 0 ? 'left' : 'right');
            }
            if (isIdleRef.current) {
              setIdleAnimation(selectRandomIdle());
            }
          }
          return clampToViewport(targetPosition);
        }

        if (!isTouch && Math.abs(dx) > 0.5) {
          setDirection(dx > 0 ? 'right' : 'left');
        }

        const ratio = currentSpeed / distance;
        return clampToViewport({
          x: currentPos.x + dx * ratio,
          y: currentPos.y + dy * ratio,
        });
      });

      animationFrameRef.current = requestAnimationFrame(updatePosition);
    };

    animationFrameRef.current = requestAnimationFrame(updatePosition);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetPosition, boostLevel, selectRandomIdle, isTouch]);

  // Handle animation end for idle animations + bark sound
  const onAnimationEnd = useCallback(() => {
    if (isIdleRef.current && hasReachedTargetRef.current) {
      const next = selectRandomIdle();
      if (next === 'barking') {
        dogSound.playBark();
      }
      setIdleAnimation(next);
    }
  }, [selectRandomIdle]);

  const animation = isIdle && hasReachedTarget ? idleAnimation : 'walking';

  return {
    position,
    animation,
    direction,
    isVisible,
    onAnimationEnd,
  };
}
