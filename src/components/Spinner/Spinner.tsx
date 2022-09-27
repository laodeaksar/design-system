import { SpinnerStyled } from './Spinner.styles';
import type { SpinnerProps } from './Spinner.types';

import Flex from '../Flex';
import VisuallyHidden from '../VisuallyHidden';

const Spinner = (props: SpinnerProps) => {
  const { label = 'Loading...' } = props;
  
  return (
    <Flex gap={2}>
      <SpinnerStyled {...props}>
        {label && <VisuallyHidden as="p">{label}</VisuallyHidden>}
      </SpinnerStyled>
    </Flex>
  );
};

export default Spinner;
