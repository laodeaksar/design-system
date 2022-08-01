import React from 'react';

import type { IconSize, IconVariant } from './Icon.styles';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: IconSize;
  variant?: IconVariant;
  outline?: boolean;
}
