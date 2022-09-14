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

const AlertDialogContent = (props: AlertDialogProps) => {
  const { description, title, children } = props;

  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <Flex css={{ justifyContent: 'flex-end' }}>
          <AlertDialogPrimitive.Cancel asChild>
            <Button variant="primary" css={{ marginRight: 25 }}>
              Cancel
            </Button>
          </AlertDialogPrimitive.Cancel>
          <AlertDialogPrimitive.Action asChild>
            {children}
          </AlertDialogPrimitive.Action>
        </Flex>
      </StyledContent>
    </AlertDialogPrimitive.Portal>
  );
};

const AlertDialogTrigger = ({ children }: ContentProps) => (
  <AlertDialogPrimitive.Trigger asChild>
    {children}
  </AlertDialogPrimitive.Trigger>
);

const AlertDialog = (props: AlertDialogPrimitive.AlertDialogProps) => {
  const { children } = props;

  return (
    <AlertDialogPrimitive.Root {...props}>{children}</AlertDialogPrimitive.Root>
  );
};

AlertDialog.Content = AlertDialogContent;
AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.displayName = 'AlertDialog';

export default AlertDialog;
