//import * as Stitches from '@stitches/react';

//type Size = Stitches.PropertyValue<'padding'>;

const paddingUtils = {
  // Abbreviated padding properties
  paddingVH: ([v, h]: [Size, Size]) => ({
    paddingTop: v,
    paddingBottom: v,
    paddingLeft: h,
    paddingRight: h,
  }),
  pt: (value: Size) => ({
    paddingTop: value,
  }),
  pr: (value: Size) => ({
    paddingRight: value,
  }),
  pb: (value: Size) => ({
    paddingBottom: value,
  }),
  pl: (value: Size) => ({
    paddingLeft: value,
  }),
  px: (value: Size) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Size) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  pxy: ([v, h]: [any, any]) => ({
    paddingTop: v,
    paddingBottom: v,
    paddingLeft: h,
    paddingRight: h,
  }),
};

export default paddingUtils;
