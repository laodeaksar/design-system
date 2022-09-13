import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import {
  StyledContent,
  StyledDescription,
  StyledOverlay,
  StyledTitle,
} from './Dialog.styles';
import { DialogProps, ContentProps } from './Dialog.types';

import Flex from '../Flex';
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

const Dialog = (props: DialogProps) => {
  const { description, title, children, action, trigger } = props;

  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button variant="primary">{trigger}</Button>
      </DialogPrimitive.Trigger>
      <Content>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        {children}
        <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
          <DialogPrimitive.Close asChild>{action}</DialogPrimitive.Close>
        </Flex>
        <DialogPrimitive.Close asChild>
          <Button variant="icon" icon={<Icon.X />} />
        </DialogPrimitive.Close>
      </Content>
    </DialogPrimitive.Root>
  );
};

export default Dialog;
