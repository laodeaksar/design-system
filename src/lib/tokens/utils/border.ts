import type { PropertyValue } from '@stitches/react';

const borderUtils = {
  btrr: (value: PropertyValue<'border'>) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: PropertyValue<'border'>) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: PropertyValue<'border'>) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: PropertyValue<'border'>) => ({
    borderTopLeftRadius: value,
  }),
  btr: (value: PropertyValue<'border'>) => ({
    borderTopLeftRadius: value,
    borderTopRightRadius: value,
  }),
  brr: (value: PropertyValue<'border'>) => ({
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
  }),
  bbr: (value: PropertyValue<'border'>) => ({
    borderBottomRightRadius: value,
    borderBottomLeftRadius: value,
  }),
  blr: (value: PropertyValue<'border'>) => ({
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value,
  }),
};

export default borderUtils;
