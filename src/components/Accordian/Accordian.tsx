import React from 'react';

import * as Styled from './Accordian.styles';
import type * as TAccordion from './Accordian.types';

const AccordionTrigger = React.forwardRef(
  (
    props: TAccordion.TriggerProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const { children } = props;

    return (
      <Styled.Header>
        <Styled.Trigger {...props} ref={ref}>
          {children}
          <Styled.Chevron aria-hidden />
        </Styled.Trigger>
      </Styled.Header>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef(
  (props: TAccordion.ContentProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { children } = props;

    return (
      <Styled.Content {...props} ref={ref}>
        <Styled.ContentText>{children}</Styled.ContentText>
      </Styled.Content>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';

export const AccordionItem = (props: TAccordion.ItemProps) => {
  const { children } = props;

  return <Styled.Item {...props}>{children}</Styled.Item>;
};

export const Accordion = (props: TAccordion.Props) => {
  const { children } = props;

  return <Styled.Accordion {...props}>{children}</Styled.Accordion>;
};

Accordion.Content = AccordionContent;
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.displayName = 'Accordian';

export default Accordion;
