import { styled } from 'src/lib/stitches.config';

export const StyledButton = styled('button', {
  $$background: 'white',
  $$color: 'black',
  $$shadow: 'none',
  $$opacity: 1,
  $$scale: 1,

  WebkitAppearance: 'none',
  WebkitTapHighlightColor: 'transparent',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: '0',
  outline: 'none',
  cursor: 'pointer',
  border: '0',
  font: 'inherit',

  /* Constant properties */
  fontSize: '$2',
  fontWeight: '$3',
  height: '44px',
  width: '$max',
  padding: '11px 16px',
  transition: 'background 0.2s, transform 0.2s, color 0.2s, box-shadow 0.3s',
  borderRadius: '$1',

  /* Computed properties */
  background: '$$background',
  color: '$$color',
  transform: 'scale($$scale) translateZ(0)',
  boxShadow: '$$shadow',
  opacity: '$$opacity',

  $$primary: '0 2px 40px -4px var(--laodeaksar-form-input-focus)',

  '&:active': {
    $$scale: '0.95',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        $$background: 'var(--laodeaksar-colors-brand)',
        $$color: 'hsl(var(--palette-gray-00))',

        '&:disabled': {
          $$background: 'var(--laodeaksar-form-input-disabled)',
          $$color: 'var(--laodeaksar-colors-typeface-tertiary)',
        },

        '&:hover': {
          '&:not(:disabled)': {
            $$shadow: '$$primary',
          },
        },

        '&:focus-visible': {
          $$shadow: '$$primary',
        },
      },

      secondary: {
        $$background: 'var(--laodeaksar-colors-emphasis)',
        $$color: 'var(--laodeaksar-colors-brand)',

        '&:disabled': {
          $$background: 'var(--laodeaksar-form-input-disabled)',
          $$color: 'var(--laodeaksar-colors-typeface-tertiary)',
        },

        '&:hover': {
          '&:not(:disabled)': {
            $$shadow: '$$primary',
          },
        },

        '&:focus-visible': {
          $$shadow: '$$primary',
        },
      },

      danger: {
        $$background: 'var(--laodeaksar-colors-emphasis)',
        $$color: 'var(--laodeaksar-colors-danger)',

        '&:disabled': {
          $$background: 'var(--laodeaksar-form-input-disabled)',
          $$color: 'var(--laodeaksar-colors-typeface-tertiary)',
        },

        '&:hover': {
          '&:not(:disabled)': {
            $$shadow: '$$primary',
          },
        },

        '&:focus-visible': {
          $$shadow: '$$primary',
        },
      },
    },

    isLoading: {
      true: {
        cursor: 'not-allowed',
        $$background: 'var(--laodeaksar-form-input-disabled)',
        $$color: 'var(--laodeaksar-colors-typeface-tertiary)',
      },
    },
  },
});

export const StyledIconButton = styled('button', {
  $$color: 'var(--laodeaksar-colors-typeface-tertiary)',
  $$corner: '$1',
  $$background: 'var(--laodeaksar-colors-foreground)',
  $$shadow: 'none',
  $$thickness: '1px',
  $$borderColor: 'transparent',
  $$contentScale: 1,
  $$backgroundScale: 1,

  WebkitAppearance: 'none',
  WebkitTapHighlightColor: 'transparent',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: '0',
  outline: 'none',
  cursor: 'pointer',
  border: '0',

  /* Constant properties */
  size: '44px',
  background: 'transparent',
  transition: 'color 0.3s ease, transform 0.3s ease',
  borderRadius: '$1',
  color: '$$color',
  transform: 'scale($$contentScale) translateZ(0)',

  $$primary: '0 2px 40px -4px var(--laodeaksar-form-input-focus)',

  '&::after': {
    zIndex: '0',
    position: 'absolute',
    content: "''",
    display: 'block',
    size: '$full',
    borderRadius: '$$corner',
    transition:
      'box-shadow 0.3s ease, border-color 0.2s, background 0.3s ease,\n      transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    background: '$$background',
    transform: 'scale(var(--button-background-scale, 1)) translateZ(0)',
    border: '$$thickness solid $$borderColor',
    boxShadow: '$$shadow',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    $$background: 'var(--laodeaksar-form-input-disabled)',
    $$color: 'var(--laodeaksar-colors-typeface-tertiary)',
  },

  '&:hover': {
    '&:not(:disabled)': {
      $$borderColor: 'var(--laodeaksar-colors-brand)',
      $$thickness: '2px',
      $$color: 'var(--laodeaksar-colors-brand)',
      $$corner: 'calc($space$1 + 2px)',
      $$backgroundScale: '0.92',
      $$shadow: '$$primary',
    },
  },

  '&:focus-visible': {
    $$borderColor: 'var(--laodeaksar-colors-brand)',
    $$thickness: '2px',
    $$color: 'var(--laodeaksar-colors-brand)',
    $$corner: 'calc($space$1 + 2px)',
    $$backgroundScale: 0.92,
    $$shadow: '$$primary',
  },

  '&:active': {
    $$contentScale: '0.95',
  },
});
