const utils = {
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

  bc: (value: any) => ({
    backgroundColor: value,
  }),
  linearGradient: (value: any) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  radialGradient: (value: any) => ({
    backgroundImage: `radial-gradient(${value})`,
  }),

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

  size: (value: any) => ({
    width: value,
    height: value,
  }),

  appearance: (value: any) => ({
    WebkitAppearance: value,
    MozAppearance: 'none',
    appearance: value,
  }),
  backgroundClip: (value: any) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
};

export { utils };
