import React from 'react';

export type ContentProps = {
  children: React.ReactNode;
};

export interface AlertDialogProps extends ContentProps {
  title: string;
  description: string;
  action: React.ReactNode;
}
