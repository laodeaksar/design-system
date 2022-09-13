import { ForwardRefComponent } from 'framer-motion';
import { CSS } from '../../lib/stitches.config';

export type MainButtonVariant = 'primary' | 'secondary' | 'danger';
export type IconButtonVariant = 'icon';

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  // Note @ode_aksar: I honestly gave up on typing this properly
  // Originally I wanted to type it as ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<"button">>;
  // But that is somehow invalid :shurg. The objective here would be to only allow polymorphism for motion.button
  as?: ForwardRefComponent<HTMLButtonElement, any>;
  type?: 'button' | 'reset' | 'submit';
  css?: CSS;
}

interface MainButtonProps extends BaseButtonProps {
  variant: MainButtonVariant;
  icon?: never;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

interface IconButtonProps extends BaseButtonProps {
  variant: IconButtonVariant;
  icon: React.ReactNode;
  isLoading?: never;
  startIcon?: never;
  endIcon?: never;
}

export type ButtonProps<T> = (MainButtonProps | IconButtonProps) & T;
