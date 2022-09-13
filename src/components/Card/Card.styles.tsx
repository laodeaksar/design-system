import { styled } from 'src/lib/stitches.config';
import Box from 'src/components/Box';

export const CardWrapper = styled(Box, {
  $$background: 'var(--laodeaksar-card-background-color)',
  $$blur: 'none',

  position: 'relative',
  background: '$$background',
  backdropFilter: '$$blur',
  borderRadius: '$2',
  boxShadow: '$$shadow',
  border: '1px solid var(--laodeaksar-border-color)',
  overflow: 'hidden',

  variants: {
    glass: {
      true: {
        $$background: 'var(--laodeaksar-foreground)',
        $$blur: 'blur(6px)',
      },
    },
    depth: {
      0: { $$shadow: '$shadows$0' },
      1: { $$shadow: '$shadows$1' },
      2: { $$shadow: '$shadows$2' },
      3: { $$shadow: '$shadows$3' },
    },
  },
  defaultVariants: {
    depth: 1,
  },
});

export const CardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: '50px',
  padding: '0px 24px',
  btr: '$1',
  color: 'var(--laodeaksar-colors-typeface-tertiary)',
  fontWeight: '$3',
  fontSize: '$4',
  borderBottom: '1px solid var(--laodeaksar-colors-emphasis)',
});

CardHeader.displayName = 'CardHeader';

export const CardBody = styled('div', {
  overflow: 'hidden',
  padding: '36px 24px',
  position: 'relative',

  variants: {
    dotMatrix: {
      true: {
        radialGradient: 'var(--laodeaksar-border-color) 1px, transparent 0',
        backgroundPosition: '50% center',
        backgroundSize: '20px 20px',
      },
    },
  },
});
