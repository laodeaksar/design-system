import { globalCss } from './stitches.config';

import { darkTheme, lightTheme } from './themes';
import { palette } from './tokens/colors';
import { grid } from './tokens/layout';

const global = {
  '*, *:before, *:after': {
    'box-sizing': 'border-box',
  },
};

export const globalStyles = globalCss({
  ':root': {
    ...palette,
    ...grid,
  },
  ...global,
  ...lightTheme,
  ...darkTheme,
});
