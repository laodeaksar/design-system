const backgroundUtils = {
  bc: (value: any) => ({
    backgroundColor: value,
  }),
  linearGradient: (value: any) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  radialGradient: (value: any) => ({
    backgroundImage: `radial-gradient(${value})`,
  }),
  backgroundClip: (value: any) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
};

export default backgroundUtils;
