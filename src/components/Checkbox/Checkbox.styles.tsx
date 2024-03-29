import { styled } from 'src/lib/stitches.config';

export const StyledCheckbox = styled('input', {
  $$border: 'var(--laodeaksar-form-input-border)',
  $$background: 'var(--laodeaksar-form-input-background)',
  $$shadow: 'none',

  appearance: 'none',

  flexShrink: '0',
  size: '24px',

  outline: 'none',
  display: 'inline-block',
  position: 'relative',
  margin: '0',
  cursor: 'pointer',

  borderRadius: '$1',
  border: '1px solid $$border',
  background: '$$background',
  boxShadow: '$$shadow',
  transition: 'background 0.3s, border-color 0.3s, box-shadow 0.2s',

  $$primary: '0 2px 20px 3px var(--laodeaksar-form-input-focus)',

  $$do: '0.2s',
  $$dt: '0.3s',
  $$dte: 'ease',
  $$dtd: '0s',
  $$rotation: '20deg',

  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    opacity: '$$opacity',
    transition: 'transform $$dt $$dte $$dtd, opacity $$do',
    width: '6px',
    height: '10px',
    border: '2px solid var(--laodeaksar-form-input-background)',
    borderTop: '0',
    borderLeft: '0',
    left: '8px',
    top: '5px',
    transform: 'rotate($$rotation)',
  },

  '&:checked': {
    $$background: 'var(--laodeaksar-form-input-active)',
    $$border: 'var(--laodeaksar-form-input-active)',
    $$do: '0.3s',
    $$dt: '0.6s',
    $$dte: 'cubic-bezier(0.2, 0.85, 0.32, 1.2)',
    $$dtd: '0.1s',
    $$opacity: '1',
    $$rotation: '43deg',
  },

  '&:disabled': {
    $$background: 'var(--laodeaksar-form-input-disabled)',

    cursor: 'not-allowed',
    opacity: '0.65',

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

      $$shadow: '$$primary',
    },
  },

  '&:focus-visible': {
    $$border: 'var(--laodeaksar-form-input-active)',
    $$shadow: '$$primary',
  },
});
