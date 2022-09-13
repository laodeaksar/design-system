import React from 'react';

import { SkeletonStyled } from './Skeleton.styles';
import { SkeletonProps } from './Skeleton.types';

const Skeleton = React.forwardRef(
  (props: SkeletonProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { visible, circle, ...rest } = props;

    return (
      <SkeletonStyled ref={ref} visible={visible} circle={circle} {...rest} />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;
