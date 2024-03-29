import * as DialogPrimitive from '@radix-ui/react-dialog';

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

export const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$foreground',
  position: 'fixed',
  inset: 0,

  '@motion': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

export const Content = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: '$1',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,

  '@motion': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&:focus': {
    outline: 'none',
  },
});

export const Title = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: 'var(--laodeaksar-colors-typeface-primary)',
  fontSize: 17,
});

export const Description = styled(DialogPrimitive.Description, {
  margin: '10px 0 20px',
  color: 'var(--laodeaksar-colors-typeface-primary)',
  fontSize: 15,
  lineHeight: 1.5,
});
