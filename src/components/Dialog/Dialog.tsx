import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import {
  StyledContent,
  StyledDescription,
  StyledOverlay,
  StyledTitle,
} from './Dialog.styles';
import { DialogProps, ContentProps } from './Dialog.types';

import Button from '../Button';
import Icon from '../Icon';

const Content = React.forwardRef(
  (props: ContentProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { children } = props;

    return (
      <DialogPrimitive.Portal>
        <StyledOverlay />
        <StyledContent {...props} ref={ref}>
          {children}
        </StyledContent>
      </DialogPrimitive.Portal>
    );
  }
);

Content.displayName = 'Content';

const DialogContent = (props: DialogProps) => {
  const { description, title, children, action } = props;

  return (
    <Content>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      {children}
      <DialogPrimitive.Close asChild>
        <Button variant="icon" icon={<Icon.X />} />
      </DialogPrimitive.Close>
    </Content>
  );
};

const DialogTrigger = ({ children }: ContentProps) => (
  <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
);

const Dialog = ({ children }: ContentProps) => (
  <DialogPrimitive.Root>{children}</DialogPrimitive.Root>
);

Dialog.Content = DialogContent;
Dialog.Trigger = DialogTrigger;
Dialog.displayName = 'Dialog';

export default Dialog;
