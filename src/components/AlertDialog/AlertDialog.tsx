import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import {
  StyledContent,
  StyledDescription,
  StyledOverlay,
  StyledTitle,
} from './AlertDialog.styles';
import { AlertDialogProps, ContentProps } from './AlertDialog.types';

import Flex from '../Flex';
import Button from '../Button';

function Content(props: ContentProps) {
  const { children } = props;

  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

const AlertDialog = (props: AlertDialogProps) => {
  const { description, title, children, actionText } = props;

  return (
    <AlertDialogPrimitive.Root>
      <AlertDialogPrimitive.Trigger asChild>
        {children}
      </AlertDialogPrimitive.Trigger>
      <Content>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <Flex css={{ justifyContent: 'flex-end' }}>
          <AlertDialogPrimitive.Cancel asChild>
            <Button variant="primary" css={{ marginRight: 25 }}>
              Cancel
            </Button>
          </AlertDialogPrimitive.Cancel>
          <AlertDialogPrimitive.Action asChild>
            <Button variant="danger">{actionText}</Button>
          </AlertDialogPrimitive.Action>
        </Flex>
      </Content>
    </AlertDialogPrimitive.Root>
  );
};

export default AlertDialog;
