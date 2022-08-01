import React from 'react';

import Flex from '../Flex';
import Spinner from '../Spinner';

import { StyledButton, StyledIconButton } from './Button.styles';

import type { ButtonProps } from './Button.types';

const Button = React.forwardRef(
  <T extends object>(
    props: ButtonProps<T>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const {
      variant = 'primary',
      children,
      icon,
      isLoading,
      startIcon,
      endIcon,
      ...rest
    } = props;

    if (variant === 'icon') {
      return (
        <StyledIconButton variant={variant} ref={ref} {...rest}>
          <Flex
            css={{
              zIndex: 1,
            }}
          >
            {icon}
          </Flex>
        </StyledIconButton>
      );
    }

    return (
      <StyledButton variant={variant} ref={ref} {...rest}>
        {startIcon && (
          <Flex
            css={{
              marginRight: '$2',
            }}
          >
            {startIcon}
          </Flex>
        )}
        {children}
        {endIcon && (
          <Flex
            css={{
              marginLeft: '$2',
            }}
          >
            {endIcon}
          </Flex>
        )}
        {isLoading && <Spinner />}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button as <T extends object>(
  props: ButtonProps<T> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => JSX.Element;
