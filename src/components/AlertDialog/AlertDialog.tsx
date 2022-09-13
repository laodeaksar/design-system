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

const AlertDialogContent = (props: AlertDialogProps) => {
  const { description, title, children } = props;

  return (
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
          {children}
        </AlertDialogPrimitive.Action>
      </Flex>
    </Content>
  );
};

const AlertDialogTrigger = ({ children }: ContentProps) => (
  <AlertDialogPrimitive.Trigger asChild>
    {children}
  </AlertDialogPrimitive.Trigger>
);

const AlertDialog = ({ children }: ContentProps) => (
  <AlertDialogPrimitive.Root>{children}</AlertDialogPrimitive.Root>
);

AlertDialog.Content = AlertDialogContent;
AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.displayName = 'AlertDialog';

export default AlertDialog;
