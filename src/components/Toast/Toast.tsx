import * as ToastPrimitive from '@radix-ui/react-toast';

import {
  StyledAction,
  StyledTitle,
  StyledToast,
  StyledDescription,
  StyledViewport,
} from './Toast.styles';
import type { ToastProps } from './Toast.types';

const Toast = (props: ToastProps) => {
  const { title, content, children } = props;

  return (
    <>
      <StyledToast {...props}>
        {title && <StyledTitle>{title}</StyledTitle>}
        <StyledDescription>{content}</StyledDescription>
        {children && (
          <StyledAction asChild altText={`${title || ''}`}>
            {children}
          </StyledAction>
        )}
        <ToastPrimitive.Close aria-label="Close">
          <span aria-hidden>×</span>
        </ToastPrimitive.Close>
      </StyledToast>
      <StyledViewport />
    </>
  );
};

Toast.displayName = 'Toast';
Toast.Provider = ToastPrimitive.Provider;

export default Toast;
