import React from 'react';
import Label from '../Label';

import * as Styled from './Range.styles';
import { RangeProps } from './Range.types';

const Rangev2 = React.forwardRef(
  (props: RangeProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { label, value, defaultValue, name, ...rest } = props;

    const values = value || defaultValue;

    return (
      <div
        style={{
          width: '100%',
          margin: '8px 0px',
        }}
      >
        {label && (
          <Label
            htmlFor={name}
            style={{
              marginBottom: '12px',
            }}
          >
            {label}
          </Label>
        )}
        <Styled.Slider {...rest} ref={ref}>
          <Styled.Track>
            <Styled.Range />
          </Styled.Track>
          {values?.map((_, i) => (
            <Styled.Thumb key={i} />
          ))}
        </Styled.Slider>
      </div>
    );
  }
);

Rangev2.displayName = 'Rangev2';

export default Rangev2;
