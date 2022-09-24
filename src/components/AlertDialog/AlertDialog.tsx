import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import * as Styled from './AlertDialog.styles';
import type * as TAlertDialog from './AlertDialog.types';

import Flex from '../Flex';
import Button from '../Button';

const AlertDialogContent = (props: TAlertDialog.ContentProps) => {
  const { description, title, children } = props;

  return (
    <AlertDialogPrimitive.Portal>
      <Styled.Overlay />
      <Styled.Content {...props}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
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
      </Styled.Content>
    </AlertDialogPrimitive.Portal>
  );
};

const AlertDialog = (props: TAlertDialog.Props) => {
  const { children } = props;

  return (
    <AlertDialogPrimitive.Root {...props}>{children}</AlertDialogPrimitive.Root>
  );
};

AlertDialog.Content = AlertDialogContent;
AlertDialog.Trigger = AlertDialogPrimitive.Trigger;
AlertDialog.displayName = 'AlertDialog';

export default AlertDialog;
