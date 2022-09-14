import React from 'react';

export type ContentProps = {
  children: React.ReactNode;
};

export interface AlertDialogProps {
  children: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
}
