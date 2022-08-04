/* eslint-disable max-len */
// Source: https://github.com/jakejarvis/jarv.is/blob/main/lib/styles/fonts/Inter.ts
// Legacy
import iosevkaLatin500NormalWoff from '@fontsource/iosevka/files/iosevka-latin-500-normal.woff';
import iosevkaLatin500NormalWoff2 from '@fontsource/iosevka/files/iosevka-latin-500-normal.woff2';
// Variable
import iosevkaLatinVarFullNormalWoff2 from '@fontsource/iosevka/files/iosevka-latin-variable-wghtOnly-normal.woff2';
import type { AtRule } from '@stitches/react/types/css';

export const name = {
  regular: 'Iosevka',
  variable: 'Iosevka var',
};
// re-export hashed URL(s) of the most prominent file so we can preload it in head:
export const preloadFonts = [
  {
    key: 'iosevka-var',
    src: iosevkaLatinVarFullNormalWoff2,
    type: 'font/woff2',
  },
];
export const family: AtRule.FontFace[] = [
  {
    fontFamily: name.regular,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `url(${iosevkaLatin500NormalWoff2}) format("woff2"), url(${iosevkaLatin500NormalWoff}) format("woff")`,
  },
  {
    fontFamily: name.variable,
    fontStyle: 'oblique 0deg 10deg',
    fontDisplay: 'swap',
    fontWeight: '100 900',
    src: `url(${iosevkaLatinVarFullNormalWoff2}) format("woff2")`,
  },
];
