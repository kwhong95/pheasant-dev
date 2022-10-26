import { Button as ChakraButton } from '@chakra-ui/react';
import { ButtonHTMLAttributes } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <ChakraButton
      {...props}
      size={size}
      colorScheme={variant === 'primary' ? 'blue' : 'pink'}
    >
      {children}
    </ChakraButton>
  );
}

export default Button;
