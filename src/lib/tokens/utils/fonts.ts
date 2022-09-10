const fontsUtils = {
  useFont: (fontName: 'display' | 'mono' | 'numeric') => ({
    fontFamily: `$${fontName}`,
    '@supports (font-variation-settings: normal)': {
      fontFamily: `$${fontName}`,
      fontOpticalSizing: 'auto',
    },
  }),
};

export default fontsUtils;
