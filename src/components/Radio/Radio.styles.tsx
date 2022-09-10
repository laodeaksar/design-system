import { styled } from 'src/lib/stitches.config';

export const StyledRadio = styled('input', {
  $$border: 'var(--laodeaksar-form-input-border)',
  $$background: 'var(--laodeaksar-form-input-background)',
  $$shadow: 'none',

  appearance: 'none',

  flexShrink: 0,
  size: '$5',

  outline: 'none',
  display: 'inline-block',
  position: 'relative',
  margin: 0,
  cursor: 'pointer',

  borderRadius: '$round',
  border: '1px solid $$border',
  background: '$$background',
  boxShadow: '$$shadow',
  transition: 'background 0.3s, border-color 0.3s, box-shadow 0.2s',

  '$$shadow-hover-primary': '0 2px 20px 3px var(--laodeaksar-form-input-focus)',

  $$do: '0.2s',
  $$dt: '0.3s',
  $$dte: 'ease',
  $$scale: '0.7',
  $$opacity: '0',

  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0,
    transition: 'transform $$dt $$dte, opacity $$do',
    size: '22px',
    borderRadius: '$round',
    background: 'var(--laodeaksar-form-input-background)',
    opacity: '$$opacity',
    scale: '$$scale',
    //transform: 'scale($$scale)',
  },

  '&:checked': {
    $$background: 'var(--laodeaksar-form-input-active)',
    $$border: 'var(--laodeaksar-form-input-active)',
    $$do: '0.3s',
    $$dt: '0.6s',
    $$dte: 'cubic-bezier(0.2, 0.85, 0.32, 1.2)',
    $$opacity: '1',
    $$scale: '0.5',
  },

  '&:disabled': {
    $$background: 'var(--laodeaksar-form-input-disabled)',
    cursor: 'not-allowed',
    opacity: 0.65,

    '&:checked': {
      $$border: 'var(--laodeaksar-form-input-border)',
    },

    '& + label': {
      cursor: 'not-allowed',
    },
  },

  '&:hover': {
    '&:not(:disabled)': {
      '&:not(:checked)': {
        $$border: 'var(--laodeaksar-form-input-active)',
      },

      $$shadow: '$$shadow-hover-primary',
    },
  },

  '&:focus-visible': {
    $$border: 'var(--laodeaksar-form-input-active)',
    $$shadow: '$$shadow-hover-primary',
  },
});
