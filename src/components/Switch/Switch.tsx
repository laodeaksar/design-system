import Flex from 'src/components/Flex';
import Label from 'src/components/Label';

import { StyledSwitch } from './Switch.styles';
import type { SwitchProps } from './Switch.types';

const Switch = (props: SwitchProps) => {
  const { toggled, id, label, ...rest } = props;

  return (
    <Flex gap={2}>
      <StyledSwitch
        className="switch"
        id={id}
        type="checkbox"
        checked={toggled}
        aria-checked={toggled}
        role="switch"
        {...rest}
      />
      {label && <Label htmlFor={id}>{label}</Label>}
    </Flex>
  );
};

export default Switch;
