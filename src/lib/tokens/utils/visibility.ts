import type { CSS } from '@stitches/react';

const visiblityUtils = {
  hidden: (value?: boolean) =>
    value
      ? {
          display: 'none',
          visibility: 'hidden',
          pointerEvents: 'none',
          userSelect: 'none',
        }
      : {},
  visible: (display: any) => ({
    display,
    visibility: 'visible',
    pointerEvents: 'auto',
    userSelect: 'auto',
  }),
  canAnimate: (styles: CSS) => ({
    '@animations': styles,
  }),
};

export default visiblityUtils;
