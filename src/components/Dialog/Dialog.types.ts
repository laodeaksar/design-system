import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

export type ContentProps = {
  children: React.ReactNode;
};

export interface DialogProps extends DialogPrimitive.DialogContentProps {
  title: string;
  description: string;
}
