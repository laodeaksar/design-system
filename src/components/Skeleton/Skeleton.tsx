import React from 'react';

import { SkeletonStyled } from './Skeleton.styles';
import { SkeletonProps } from './Skeleton.types';

const Skeleton = React.forwardRef(
  (props: SkeletonProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { visible, children, circle, ...rest } = props;

    return (
      <SkeletonStyled ref={ref} visible={visible} circle={circle} {...rest}>
        {children}
      </SkeletonStyled>
    );
  }
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;
