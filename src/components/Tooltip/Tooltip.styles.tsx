import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { keyframes, styled } from 'src/lib/stitches.config';

const slideUpAndFadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY($space$1)) scale(0.98)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
});

const slideRightAndFadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(calc(-1 * $space$1))) scale(0.98)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0) scale(1)',
  },
});

const slideDownAndFadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(calc(-1 * $space$1))) scale(0.98)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
});

const slideLeftAndFadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX($space$1)) scale(0.98)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0) scale(1)',
  },
});

export const TooltipContent = styled(TooltipPrimitive.Content, {
  color: 'hsl(var(--palette-gray-00))',
  background: 'hsl(var(--palette-gray-75))',
  borderRadius: '$0',
  fontWeight: '$3',
  fontSize: '$1',
  padding: '4px 10px',
  whiteSpace: 'nowrap',
  pointerEvents: 'none',
  userSelect: 'none',
  boxShadow: '$1',
  // boxShadow: `${Shadows[1]}`,
  zIndex: '$4',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '150ms',
    animationTimingFunction: 'ease-in-out',
    willChange: 'transform, opacity, scale',

    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': {
        animationName: slideDownAndFadeIn,
      },
      '&[data-side="right"]': {
        animationName: slideLeftAndFadeIn,
      },
      '&[data-side="bottom"]': {
        animationName: slideUpAndFadeIn,
      },
      '&[data-side="left"]': {
        animationName: slideRightAndFadeIn,
      },
    },
  },
});
