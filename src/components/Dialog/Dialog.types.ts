import * as DialogPrimitive from '@radix-ui/react-dialog';

export type Props = DialogPrimitive.DialogProps;

export type ContentProps = {
  title: string;
  description: string;
} & DialogPrimitive.DialogContentProps;
