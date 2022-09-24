import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

export type Props = AlertDialogPrimitive.AlertDialogProps;

export type ContentProps = {
  title: string;
  description: string;
} & AlertDialogPrimitive.AlertDialogContentProps;
