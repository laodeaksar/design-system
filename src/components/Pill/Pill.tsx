import useTheme from 'src/hooks/useTheme';

import type { PillProps } from './Pill.types';
import { StyledPill } from './Pill.styles';

/** IDEA
 *  New pill style:
 * - same variant
 * - solid background-color = --foreground-color ?
 */
const Pill = (props: PillProps) => {
  const { children, variant } = props;

  const theme = useTheme();

  return (
    <StyledPill {...props} dark={theme.dark} variant={variant}>
      {children}
    </StyledPill>
  );
};

export default Pill;
