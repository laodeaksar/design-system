const fontsUtils = {
  useFont: (fontName: 'display' | 'mono') => ({
    fontFamily: `$${fontName}`,
    '@supports (font-variation-settings: normal)': {
      fontFamily: `$${fontName}Var`,
      fontOpticalSizing: 'auto',
    },
  }),
  ellipsize: (value?: boolean) =>
    value
      ? { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
      : { overflow: 'unset', textOverflow: 'unset', whiteSpace: 'unset' },
};

export default fontsUtils;
