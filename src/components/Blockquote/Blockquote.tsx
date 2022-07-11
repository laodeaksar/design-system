import React from 'react';
import { StyledBlockquote } from './Blockquote.styles';
import QuotationMark from './Blockquote.icon';

const Blockquote: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children, ...rest } = props;

  return (
    <StyledBlockquote {...rest}>
      <QuotationMark className="quotation" />
      {children}
    </StyledBlockquote>
  );
};

export default Blockquote;
