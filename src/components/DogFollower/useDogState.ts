import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimationState, Direction, Position } from './types';
import { IDLE_ANIMATIONS, SPRITE_CONFIG } from './config';

function clampToViewport(pos: Position): Position {
  if (typeof window === 'undefined') return pos;
  const maxX = window.innerWidth - SPRITE_CONFIG.renderedWidth;
  const maxY = window.innerHeight - SPRITE_CONFIG.renderedHeight;
  return {
    x: Math.max(0, Math.min(pos.x, maxX)),
    y: Math.max(0, Math.min(pos.y, maxY)),
  };
}

interface UseDogStateReturn {
  position: Position;
  animation: AnimationState;
  direction: Direction;
  isVisible: boolean;
  onAnimationEnd: () => void;
}

export function useDogState(): UseDogStateReturn {
  const [position, setPosition] = useState<Position>(() => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
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

  // Keep position ref in sync for dead zone checks
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

  // Mouse tracking with idle detection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      const newTarget = clampToViewport({
        x: e.clientX - SPRITE_CONFIG.cursorOffset.x,
        y: e.clientY - SPRITE_CONFIG.cursorOffset.y,
      });

      // Dead zone check when idle: ignore movement if cursor is too close
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

      // Reset idle timer
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
  }, [selectRandomIdle]);

  // Visibility handling (mouse enters/leaves window)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    //     TODO: Set back to false
    const handleLeave = () => setIsVisible(true);
    const handleEnter = () => setIsVisible(true);

    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, []);

  // Click handler for speed boost
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleClick = () => {
      setBoostLevel((prev) => Math.min(prev + 1, SPRITE_CONFIG.maxBoostClicks));
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

    // Calculate speed with boost: linear interpolation from base to max
    const boostRatio = boostLevel / SPRITE_CONFIG.maxBoostClicks;
    const speedMultiplier = 1 + boostRatio * (SPRITE_CONFIG.maxSpeedMultiplier - 1);
    const currentSpeed = SPRITE_CONFIG.walkSpeed * speedMultiplier;

    const updatePosition = () => {
      setPosition((currentPos) => {
        const dx = targetPosition.x - currentPos.x;
        const dy = targetPosition.y - currentPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Arrived at target
        if (distance < currentSpeed) {
          if (!hasReachedTargetRef.current) {
            hasReachedTargetRef.current = true;
            setHasReachedTarget(true);
            setBoostLevel(0);
            // Face toward cursor based on offset
            if (SPRITE_CONFIG.cursorOffset.x !== 0) {
              setDirection(SPRITE_CONFIG.cursorOffset.x < 0 ? 'left' : 'right');
            }
            if (isIdleRef.current) {
              setIdleAnimation(selectRandomIdle());
            }
          }
          return clampToViewport(targetPosition);
        }

        // Update direction based on movement
        if (Math.abs(dx) > 0.5) {
          setDirection(dx > 0 ? 'right' : 'left');
        }

        // Move at current speed toward target
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
  }, [targetPosition, boostLevel, selectRandomIdle]);

  // Handle animation end for idle animations
  const onAnimationEnd = useCallback(() => {
    if (isIdleRef.current && hasReachedTargetRef.current) {
      setIdleAnimation(selectRandomIdle());
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
