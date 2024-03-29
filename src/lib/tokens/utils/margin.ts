const marginUtils = {
  // Abbreviated margin properties
  mt: (value: any) => ({
    marginTop: value,
  }),
  mr: (value: any) => ({
    marginRight: value,
  }),
  mb: (value: any) => ({
    marginBottom: value,
  }),
  ml: (value: any) => ({
    marginLeft: value,
  }),
  mx: (value: any) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: any) => ({
    marginTop: value,
    marginBottom: value,
  }),
  mxy: ([v, h]: [any, any]) => ({
    marginTop: v,
    marginBottom: v,
    marginLeft: h,
    marginRight: h,
  }),
};

export default marginUtils;
