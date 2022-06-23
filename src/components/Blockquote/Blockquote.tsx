import { StyledBlockquote } from './Blockquote.styles';
import QuotationMark from './Blockquote.icon';

const Blockquote: React.FC = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledBlockquote {...rest}>
      <QuotationMark className="quotation" />
      {children}
    </StyledBlockquote>
  );
};

export default Blockquote;
