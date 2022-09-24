import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { styled, keyframes, Shadows } from 'src/lib/stitches.config';

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

export const Overlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: 'var(--laodeaksar-colors-typeface-primary)',
  position: 'fixed',
  inset: 0,

  '@motion': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const Content = styled(AlertDialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: Shadows[2],
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,

  '@motion': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&:focus': {
    outline: 'none',
  },
});

export const Title = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: 'var(--laodeaksar-colors-typeface-primary)',
  fontSize: 17,
  fontWeight: 500,
});

export const Description = styled(AlertDialogPrimitive.Description, {
  marginBottom: 20,
  color: 'var(--laodeaksar-colors-typeface-secondary)',
  fontSize: 15,
  lineHeight: 1.5,
});
