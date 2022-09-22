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

const DialogContent = React.forwardRef(
  (props: DialogProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { description, title, children } = props;

    return (
      <DialogPrimitive.Portal>
        <StyledOverlay />
        <StyledContent {...props} ref={ref}>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          {children}
          <DialogPrimitive.Close asChild>
            <Button variant="icon" icon={<Icon.X />} />
          </DialogPrimitive.Close>
        </StyledContent>
      </DialogPrimitive.Portal>
    );
  }
);

DialogContent.displayName = 'DialogContent';

/*const DialogTrigger = ({ children }: ContentProps) => (
  <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
);*/

const Dialog = (props: DialogPrimitive.DialogProps) => {
  const { children } = props;

  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
};

Dialog.Content = DialogContent;
Dialog.Trigger = DialogPrimitive.Trigger;
//Dialog.Trigger = DialogTrigger;
Dialog.displayName = 'Dialog';

export default Dialog;
