export interface SearchBarProps {
  size?: 'small' | 'medium' | 'large';
  onChange?: () => void;
  sx?: any;
  className?: {
    root: string;
    button: string;
  };
}
