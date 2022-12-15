import { ReactElement } from 'react';

export interface ButtonProps {
  type?: 'primary' | 'secondary' | 'warning';
  color?: 'primary' | 'secondary' | 'warning';
  size?: 'small' | 'medium' | 'large';
  children: ReactElement | string;
  label?: string;
  onClick?: () => void;
}
