import React from 'react';
import { StyledBlockquote } from './Blockquote.styles';
import QuotationMark from './Blockquote.icon';

interface Props {
  children: React.ReactNode;
}

const Blockquote = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <StyledBlockquote {...rest}>
      <QuotationMark className="quotation" />
      {children}
    </StyledBlockquote>
  );
};

export default Blockquote;
