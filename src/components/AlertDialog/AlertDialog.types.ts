import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

export type ContentProps = {
  children: React.ReactNode;
};

export interface AlertDialogProps
  extends AlertDialogPrimitive.AlertDialogContentProps {
  title: string;
  description: string;
}
