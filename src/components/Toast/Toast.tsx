import * as ToastPrimitive from '@radix-ui/react-toast';

import * as Styled from './Toast.styles';
import type { ToastProps } from './Toast.types';

const Toast = (props: ToastProps) => {
  const { title, content, children } = props;

  return (
    <>
      <Styled.Toast {...props}>
        {title && <Styled.Title>{title}</Styled.Title>}
        <Styled.Description>{content}</Styled.Description>
        {children && (
          <Styled.Action asChild altText={`${title || ''}`}>
            {children}
          </Styled.Action>
        )}
        <ToastPrimitive.Close aria-label="Close">
          <span aria-hidden>×</span>
        </ToastPrimitive.Close>
      </Styled.Toast>
      <Styled.Viewport />
    </>
  );
};

Toast.displayName = 'Toast';
Toast.Provider = ToastPrimitive.Provider;

export default Toast;
