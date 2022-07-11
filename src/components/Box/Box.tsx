import { styled } from 'src/lib/stitches.config';

const Box = styled('div', {
  variants: {
    full: {
      true: { width: '$full' },
    },
  },
});

export default Box;
