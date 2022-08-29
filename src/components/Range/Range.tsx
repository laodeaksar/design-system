import React from 'react';

import useDebouncedValue from 'src/hooks/useDebouncedValue';
import Label from 'src/components/Label';

import { StyledRange } from './Range.styles';
import type { RangeProps } from './Range.types';
import { adjustSlider } from './utils';

const Range = (props: RangeProps) => {
  const {
    debounce = 0,
    step,
    id,
    disabled,
    max,
    min,
    onChange,
    value,
    label,
    ...rest
  } = props;
  const [range, setRange] = React.useState(value);
  const debouncedValue = useDebouncedValue(range, debounce);

  React.useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  const fill = React.useMemo(
    () => adjustSlider(value, min, max, disabled),
    [value, min, max, disabled]
  );

  return (
    <div
      style={{
        width: '100%',
        margin: '8px 0px',
      }}
    >
      {label && (
        <Label htmlFor={id} style={{ marginBottom: '12px' }}>
          {label}
        </Label>
      )}
      <StyledRange
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => setRange(parseFloat(event.target.value))}
        css={{
          $$track: fill,
        }}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};

export default Range;
