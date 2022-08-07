const borderUtils = {
  btrr: (value: any) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: any) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: any) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: any) => ({
    borderTopLeftRadius: value,
  }),
  btr: (value: any) => ({
    borderTopLeftRadius: value,
    borderTopRightRadius: value,
  }),
  brr: (value: any) => ({
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
  }),
  bbr: (value: any) => ({
    borderBottomRightRadius: value,
    borderBottomLeftRadius: value,
  }),
  blr: (value: any) => ({
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value,
  }),
};

export default borderUtils;
