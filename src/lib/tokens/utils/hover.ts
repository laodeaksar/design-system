import type { CSS } from '@stitches/react';

const hoverUtils = {
  canHover: (styles: CSS) => ({
    '@hover': styles,
  }),
  hover: (styles: CSS) => ({
    '&:hover': styles,
  }),
  focus: (styles: CSS) => ({
    '&:focus': styles,
  }),
  hocus: (styles: CSS) => ({
    canHover: {
      hover: styles,
    },
    focus: styles,
  }),
  disabled: (styles: CSS) => ({
    '&:disabled': styles,
  }),
};

export default hoverUtils;
