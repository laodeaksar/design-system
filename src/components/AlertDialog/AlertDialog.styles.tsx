import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { styled, keyframes } from 'src/lib/stitches.config';

const overlayShow = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(.96)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
});

export const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: '$typeface-primary',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: '$2',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
});

export const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: '$typeface-primary',
  fontSize: 17,
  fontWeight: 500,
});

export const StyledDescription = styled(AlertDialogPrimitive.Description, {
  marginBottom: 20,
  color: '$typeface-secondary',
  fontSize: 15,
  lineHeight: 1.5,
});
