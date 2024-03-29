import { getVariant, keyframes, styled } from 'src/lib/stitches.config';

const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

export const SpinnerStyled = styled('div', {
  $$thickness: '2px',
  $$border: 'currentColor',
  $$empty: 'transparent',

  display: 'inline-block',
  borderColor: '$$border',
  borderStyle: 'solid',
  borderRadius: '$round',
  borderWidth: '$$thickness',
  borderBottomColor: '$$empty',
  borderLeftColor: '$$empty',
  animation: `${spin} 0.45s linear infinite`,

  variants: {
    variant: {
      primary: {
        $$border: 'var(--laodeaksar-colors-typeface-primary)',
      },
      secondary: {
        $$border: 'var(--laodeaksar-colors-typeface-secondary)',
      },
      tertiary: {
        $$border: 'var(--laodeaksar-colors-typeface-tertiary)',
      },
      info: {
        $$border: 'var(--laodeaksar-colors-brand)',
      },
      danger: {
        $$border: 'var(--laodeaksar-colors-danger)',
      },
      success: {
        $$border: 'var(--laodeaksar-colors-success)',
      },
      warning: {
        $$border: 'var(--laodeaksar-colors-warning)',
      },
    },
    thickness: {
      1: {
        $$thickness: '$radii$0',
      },
      2: {
        $$thickness: '$radii$1',
      },
      3: {
        $$thickness: '$radii$2',
      },
    },
    size: getVariant('sizes', (token) => ({ size: token })),
  },
  defaultVariants: {
    size: 4,
  },
});

export type SpinnerSize = React.ComponentProps<typeof SpinnerStyled>['size'];
export type SpinnerVariant = React.ComponentProps<
  typeof SpinnerStyled
>['variant'];
