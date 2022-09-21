import React from 'react';
import Label from '../Label';
import {
  StyledRange,
  StyledSlider,
  StyledThumb,
  StyledTrack,
} from './Range.styles';
import { RangeProps } from './Range.types';

const Rangev2 = React.forwardRef(
  (props: RangeProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { label } = props;

    const value = props.value || props.defaultValue;

    return (
      <div
        style={{
          width: '100%',
          margin: '8px 0px',
        }}
      >
        {label && (
          <Label
            htmlFor={props.name}
            style={{
              marginBottom: '12px',
            }}
          >
            {label}
          </Label>
        )}
        <StyledSlider {...props} ref={ref}>
          <StyledTrack>
            <StyledRange />
          </StyledTrack>
          {value.map((_, i) => (
            <StyledThumb key={i} />
          ))}
        </StyledSlider>
      </div>
    );
  }
);

Rangev2.displayName = 'Rangev2';

export default Rangev2;
