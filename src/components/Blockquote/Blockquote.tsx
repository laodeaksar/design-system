import React from 'react';

import { StyledBlockquote } from './Blockquote.styles';
import QuotationMark from './Blockquote.icon';

const Blockquote = (props: React.PropsWithChildren) => {
  const { children, ...rest } = props;

  return (
    <StyledBlockquote {...rest}>
      <QuotationMark className="quotation" />
      {children}
    </StyledBlockquote>
  );
};

export default Blockquote;
