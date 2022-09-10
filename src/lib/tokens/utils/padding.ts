//import * as Stitches from '@stitches/react';

//type Size = Stitches.PropertyValue<'padding'>;

const paddingUtils = {
  // Abbreviated padding properties
  pt: (value: any) => ({
    paddingTop: value,
  }),
  pr: (value: any) => ({
    paddingRight: value,
  }),
  pb: (value: any) => ({
    paddingBottom: value,
  }),
  pl: (value: any) => ({
    paddingLeft: value,
  }),
  px: (value: any) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: any) => ({
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
