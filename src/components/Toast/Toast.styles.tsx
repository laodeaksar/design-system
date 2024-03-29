import * as ToastPrimitive from '@radix-ui/react-toast';

import { keyframes, styled } from 'src/lib/stitches.config';

import { VIEWPORT_PADDING } from './Toast.constants';

const hide = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

const slideIn = keyframes({
  from: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`,
  },
  to: {
    transform: 'translateX(0)',
  },
});

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`,
  },
});

export const Viewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '$w-screen',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
});

export const Toast = styled(ToastPrimitive.Root, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: '$2',
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '@motion': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },

    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },

    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },

    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },

    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
});

export const Title = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: '$4',
  color: 'var(--laodeaksar-colors-typeface-primary)',
  fontSize: 15,
});

export const Description = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  color: 'var(--laodeaksar-colors-typeface-secondary)',
  fontSize: 13,
  lineHeight: 1.3,
});

export const Action = styled(ToastPrimitive.Action, {
  gridArea: 'action',
});
