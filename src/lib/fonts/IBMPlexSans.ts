/* eslint-disable max-len */
// Source: https://github.com/jakejarvis/jarv.is/blob/main/lib/styles/fonts/Inter.ts
// Legacy
import ibmPlexSansLatin400NormalWoff from '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff';
import ibmPlexSansLatin400NormalWoff2 from '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2';
import ibmPlexSansLatin500NormalWoff from '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff';
import ibmPlexSansLatin500NormalWoff2 from '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff2';
// Variable
import ibmPlexSansLatinVarFullNormalWoff2 from '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-variable-full-normal.woff2';
import type { AtRule } from '@stitches/react/types/css';

export const name = {
  regular: 'IBM Plex Sans',
  variable: 'IBM Plex Sans var',
};
// re-export hashed URL(s) of the most prominent file so we can preload it in head:
export const preloadFonts = [
  {
    key: 'ibm-sans-plex-var',
    src: ibmPlexSansLatinVarFullNormalWoff2,
    type: 'font/woff2',
  },
];
export const family: AtRule.FontFace[] = [
  {
    fontFamily: name.regular,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url(${ibmPlexSansLatin400NormalWoff2}) format("woff2"), url(${ibmPlexSansLatin400NormalWoff}) format("woff")`,
  },
  {
    fontFamily: name.regular,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `url(${ibmPlexSansLatin500NormalWoff2}) format("woff2"), url(${ibmPlexSansLatin500NormalWoff}) format("woff")`,
  },
  {
    fontFamily: name.variable,
    fontStyle: 'oblique 0deg 10deg',
    fontDisplay: 'swap',
    fontWeight: '100 900',
    src: `url(${ibmPlexSansLatinVarFullNormalWoff2}) format("woff2")`,
  },
];
