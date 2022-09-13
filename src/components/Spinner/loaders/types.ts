import React from 'react';

const sizes = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58,
};

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: typeof sizes;
}
