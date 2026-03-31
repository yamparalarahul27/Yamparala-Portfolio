import type { CSSProperties } from 'react';
import { useMemo } from 'react';
import styles from './DogFollower.module.css';
import { useDogState } from './useDogState';
import { SPRITE_CONFIG } from './config';
import { AnimationState } from './types';

function getScaledSpriteSize(): { width: number; height: number } {
  const { frameWidth, frameHeight, renderedWidth, renderedHeight, gutter, animations } =
    SPRITE_CONFIG;
  const scaleX = renderedWidth / frameWidth;
  const scaleY = renderedHeight / frameHeight;

  // Find max frames for sheet width, count rows for height
  const maxFrames = Math.max(...Object.values(animations).map((a) => a.frames));
  const numRows = Math.max(...Object.values(animations).map((a) => a.row)) + 1;

  // Account for gutters: total = frames * frameSize + (frames - 1) * gutter
  const totalWidth = maxFrames * frameWidth + (maxFrames - 1) * gutter;
  const totalHeight = numRows * frameHeight + (numRows - 1) * gutter;

  return {
    width: totalWidth * scaleX,
    height: totalHeight * scaleY,
  };
}

function generateAnimationStyle(animation: AnimationState): CSSProperties {
  const config = SPRITE_CONFIG.animations[animation];
  const { frameHeight, renderedWidth, renderedHeight, gutter } = SPRITE_CONFIG;
  const scaleY = renderedHeight / frameHeight;
  // Account for gutter between rows: row N starts at N * (frameHeight + gutter)
  const yOffset = config.row * (frameHeight + gutter);
  const scaledYOffset = yOffset * scaleY;
  const spriteSize = getScaledSpriteSize();

  // Determine iteration count
  let iterationCount: string | number = 'infinite';
  if (!config.loop) {
    iterationCount = config.loopCount ?? 1;
  }

  const keyframeName = `sprite-${animation}`;

  return {
    width: renderedWidth,
    height: renderedHeight,
    backgroundImage: `url(${SPRITE_CONFIG.spriteSheet})`,
    backgroundSize: `${spriteSize.width}px ${spriteSize.height}px`,
    backgroundPosition: `0 -${scaledYOffset}px`,
    animation: `${keyframeName} ${config.duration}s steps(${config.frames}) ${iterationCount}`,
  };
}

export function DogFollower() {
  const { position, animation, direction, isVisible, onAnimationEnd } =
    useDogState();
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Generate keyframe styles dynamically with scaled positions
  const keyframeStyles = useMemo(() => {
    const { frameWidth, frameHeight, renderedWidth, renderedHeight, gutter, animations } =
      SPRITE_CONFIG;
    const scaleX = renderedWidth / frameWidth;
    const scaleY = renderedHeight / frameHeight;

    const keyframes = Object.entries(animations)
      .map(([name, config]) => {
        // Each frame step = frameWidth + gutter
        const stepSize = frameWidth + gutter;
        const totalWidth = stepSize * config.frames;
        const scaledTotalWidth = totalWidth * scaleX;
        // Row offset accounts for gutter between rows
        const yOffset = config.row * (frameHeight + gutter);
        const scaledYOffset = yOffset * scaleY;
        return `
          @keyframes sprite-${name} {
            from { background-position: 0 -${scaledYOffset}px; }
            to { background-position: -${scaledTotalWidth}px -${scaledYOffset}px; }
          }
        `;
      })
      .join('\n');

    return keyframes;
  }, []);

  // Don't render with reduced motion or when hidden
  if (reducedMotion || !isVisible) {
    return null;
  }

  const animationStyle = generateAnimationStyle(animation);
  const positionStyle: CSSProperties = {
    left: position.x,
    top: position.y,
  };

  return (
    <>
      <style>{keyframeStyles}</style>
      <div
        className={`${styles.dog} ${direction === 'left' ? styles.left : ''}`}
        style={{ ...animationStyle, ...positionStyle }}
        onAnimationEnd={onAnimationEnd}
        aria-hidden="true"
      />
    </>
  );
}

export default DogFollower;
