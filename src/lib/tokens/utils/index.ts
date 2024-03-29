import backgroundUtils from './background';
import borderUtils from './border';
import marginUtils from './margin';
import paddingUtils from './padding';

const utils = {
  ...paddingUtils,
  ...marginUtils,
  ...backgroundUtils,
  ...borderUtils,

  insetX: (value: any) => ({
    left: value,
    right: value,
  }),
  insetY: (value: any) => ({
    top: value,
    bottom: value,
  }),
  us: (value: any) => ({
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
