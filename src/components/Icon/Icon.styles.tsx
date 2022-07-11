import { styled, VariantProps } from '../../lib/stitches.config';

export const StyledSVG = styled('svg', {
  variants: {
    variant: {
      default: { stroke: 'currentColor', fill: 'none' },
      primary: {
        stroke: 'var(--laodeaksar-colors-typeface-primary)',
        fill: 'none',
      },
      secondary: {
        stroke: 'var(--laodeaksar-colors-typeface-secondary)',
        fill: 'none',
      },
      tertiary: {
        stroke: 'var(--laodeaksar-colors-typeface-tertiary)',
        fill: 'none',
      },
      info: {
        stroke: 'var(--laodeaksar-colors-brand)',
        fill: 'var(--laodeaksar-colors-emphasis)',
      },
      danger: {
        stroke: 'var(--laodeaksar-colors-danger)',
        fill: 'var(--laodeaksar-colors-danger-emphasis)',
      },
      success: {
        stroke: 'var(--laodeaksar-colors-success)',
        fill: 'var(--laodeaksar-colors-success-emphasis)',
      },
      warning: {
        stroke: 'var(--laodeaksar-colors-warning)',
        fill: 'var(--laodeaksar-colors-warning-emphasis)',
      },
      none: {},
    },
    outline: {
      true: {
        fill: 'none !important',
      },
    },
    size: {
      1: {
        size: '$1',
      },
      2: {
        size: '$2',
      },
      3: {
        size: '$3',
      },
      4: {
        size: '$4',
      },
      5: {
        size: '$5',
      },
      6: {
        size: '$6',
      },
      7: {
        size: '$7',
      },
      8: {
        size: '$8',
      },
      9: {
        size: '$9',
      },
      10: {
        size: '$10',
      },
      11: {
        size: '$11',
      },
      12: {
        size: '$12',
      },
      13: {
        size: '$13',
      },
      14: {
        size: '$14',
      },
      15: {
        size: '$15',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    outline: true,
    size: 5,
  },
});

export type IconSize = VariantProps<typeof StyledSVG>['size'];
export type IconVariant = VariantProps<typeof StyledSVG>['variant'];
