import { ReactNode } from 'react';

export interface ButtonProps {
  variant?: 'contained' | 'text' | 'outlined';
  color?: 'primary' | 'secondary' | 'warning';
  size?: 'small' | 'medium' | 'large';
  label: string | ReactNode;
  onClick?: () => void;
  sx?: any;
  className?: {};
  disableFocusRipple?: boolean;
}
