import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { styled, keyframes } from 'src/lib/stitches.config';

import Icon from '../Icon';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  width: 300,
  backgroundColor: '$foreground',
  boxShadow: '$1',
});

export const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '$1',
  },
});

export const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
});

export const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 15,
  lineHeight: 1,
  color: '$brand',
  boxShadow: '$1',
  '&[data-state="closed"]': { backgroundColor: 'white' },
  '&[data-state="open"]': { backgroundColor: 'white' },
  '&:hover': { backgroundColor: '$body' },
});

export const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontSize: 15,
  color: '$typeface-primary',
  backgroundColor: '$foreground',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

export const StyledContentText = styled('div', {
  padding: '15px 20px',
});

export const StyledChevron = styled(Icon.Arrow, {
  color: '$brand',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});
