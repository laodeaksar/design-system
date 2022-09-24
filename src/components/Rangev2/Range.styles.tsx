import * as SliderPrimitive from '@radix-ui/react-slider';

import { Shadows, styled } from 'src/lib/stitches.config';

export const StyledSlider = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '$full',

  '&[data-orientation="horizontal"]': {
    height: '$5',
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: '$5',
    height: '$full',
  },
});

export const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: 'var(--laodeaksar-form-input-disabled)',
  position: 'relative',
  flexGrow: 1,
  border: 'none',
  borderRadius: '$0',

  '&[data-orientation="horizontal"]': {
    height: '$1',
  },

  '&[data-orientation="vertical"]': {
    width: '$1',
  },
});

export const StyledRange = styled(SliderPrimitive.Range, {
  position: 'absolute',
  backgroundColor: 'var(--laodeaksar-form-input-active)',
  //borderRadius: '$round',
  height: '$full',
});

export const StyledThumb = styled(SliderPrimitive.Thumb, {
  $$shadow: Shadows[2],
  $$border: 'var(--laodeaksar-form-input-border)',

  all: 'unset',
  display: 'block',
  size: '$5',
  borderRadius: '$round',
  backgroundColor: 'var(--laodeaksar-form-input-background)',
  border: '1px solid $$border',
  boxShadow: '$$shadow',

  '@hover': {
    hover: {
      $$border: 'var(--laodeaksar-form-input-active)',
      $$shadow: '0 2px 20px 3px var(--laodeaksar-form-input-focus)',
    },
  },

  focus: {
    $$border: 'var(--laodeaksar-form-input-active)',
    $$shadow: '0 2px 20px 3px var(--laodeaksar-form-input-focus)',
  },
});
