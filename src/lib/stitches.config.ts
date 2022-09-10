import { createStitches, CSS as StitchesCSS } from '@stitches/react';

import { radii } from './tokens/radii';
import { spaces as space } from './tokens/spaces';
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './tokens/typography';
import { media } from './tokens/media';
import { sizes } from './tokens/sizes';
import { utils } from './tokens/utils';
import { zIndices } from './tokens/zIndices';
import { shadows } from './tokens/shadows';
import { colors } from './tokens/colors';

const { config, css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches({
    theme: {
      colors,
      fonts,
      space,
      shadows,
      sizes,
      fontSizes,
      lineHeights,
      letterSpacings,
      fontWeights,
      radii,
      zIndices,
    },
    media,
    utils,
  });

export type CSS = StitchesCSS<typeof config>;
export type { VariantProps } from '@stitches/react';

export { getVariant } from './tokens/getVariant';
export { Shadows } from './tokens/shadows';
export { config, css, getCssText, globalCss, keyframes, styled, theme };
