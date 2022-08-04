import { IBMPlexSans, Iosevka } from '../fonts';

const systemFont =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const fonts = {
  default: 'inherit',
  display: `${IBMPlexSans.name.regular}, ${systemFont}`,
  displayVar: `${IBMPlexSans.name.variable}, ${systemFont}`,
  mono: `${Iosevka.name.variable}, menlo, monospace`,
  monoVar: `${Iosevka.name.variable}, menlo, monospace`,
  numeric: `${IBMPlexSans.name.variable}`,
};

const fontSizes = {
  1: '14px',
  2: '0.875rem',
  3: '1rem',
  4: '1.125rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '2rem',
  8: '2.25rem',
  9: '2.5rem',
};

const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

const fontWeights = {
  1: '300',
  2: '400',
  3: '500',
  4: '600',
};

export { fonts, fontSizes, fontWeights, lineHeights, letterSpacings };
