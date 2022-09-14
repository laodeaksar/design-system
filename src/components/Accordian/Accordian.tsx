import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import {
  StyledItem,
  StyledAccordion,
  StyledChevron,
  StyledContent,
  StyledContentText,
  StyledHeader,
  StyledTrigger,
} from './Accordian.styles';
import type { AccordianProps } from './Accordian.types';

const AccordionTrigger = React.forwardRef(
  (
    props: AccordionPrimitive.AccordionTriggerProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const { children } = props;

    return (
      <StyledHeader>
        <StyledTrigger {...props} ref={ref}>
          {children}
          <StyledChevron aria-hidden />
        </StyledTrigger>
      </StyledHeader>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef(
  (
    props: AccordionPrimitive.AccordionContentProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { children } = props;

    return (
      <StyledContent {...props} ref={ref}>
        <StyledContentText>{children}</StyledContentText>
      </StyledContent>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';

export const AccordionItem = (props: AccordionPrimitive.AccordionItemProps) => {
  const { children } = props;

  return <StyledItem {...props}>{children}</StyledItem>;
};

export const Accordion = (props: AccordianProps) => {
  const { children } = props;

  return <StyledAccordion {...props}>{children}</StyledAccordion>;
};

Accordion.Content = AccordionContent;
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.displayName = 'Accordian';

export default Accordion;
