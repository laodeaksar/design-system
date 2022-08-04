import backgroundUtils from './background';
import borderUtils from './border';
import fontsUtils from './fonts';
import hoverUtils from './hover';
import marginUtils from './margin';
import paddingUtils from './padding';
import visiblityUtils from './visibility';

const utils = {
  ...paddingUtils,
  ...marginUtils,
  ...backgroundUtils,
  ...borderUtils,
  ...hoverUtils,
  ...visiblityUtils,
  ...fontsUtils,

  insetX: (value: any) => ({
    left: value,
    right: value,
  }),
  insetY: (value: any) => ({
    top: value,
    bottom: value,
  }),
  userSelect: (value: any) => ({
    WebkitUserSelect: value,
    MozUserSelect: value,
    MsUserSelect: value,
    userSelect: value,
  }),
  appearance: (value: any) => ({
    WebkitAppearance: value,
    MozAppearance: 'none',
    appearance: value,
  }),

  size: (value: any) => ({
    width: value,
    height: value,
  }),
};

export { utils };
