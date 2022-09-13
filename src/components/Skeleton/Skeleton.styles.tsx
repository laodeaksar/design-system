import { keyframes, styled } from 'src/lib/stitches.config';

const fade = keyframes({
  'from, to': { opacity: 0.4 },
  '50%': { opacity: 1 },
});

export const SkeletonStyled = styled('div', {
  $$height: 'auto',
  $$width: '100%',

  height: '$$height',
  width: '$$width',
  borderRadius: '$1',
  position: 'relative',
  overflow: 'hidden',
  WebkitTransform: 'translateZ(0)',

  variants: {
    circle: {
      true: {
        width: '$$height',
        borderRadius: '$round',
      },
    },
    visible: {
      true: {
        '&::before': {
          content: '""',
          position: 'absolute',
          background: '$body',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        },

        '&::after': {
          content: '""',
          position: 'absolute',
          background: '$foreground',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          animation: `${fade} 1500ms linear infinite`,
          zIndex: 11,
        },
      },
    },
  },
});
