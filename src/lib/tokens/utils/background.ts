import { PropertyValue } from '@stitches/react';

const backgroundUtils = {
  bc: (value: PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),
  linearGradient: (value: PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  radialGradient: (value: PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `radial-gradient(${value})`,
  }),
  backgroundClip: (value: PropertyValue<'backgroundClip'>) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
};

export default backgroundUtils;
