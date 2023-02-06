export interface IInputProps {
  onChange?: () => void;
  className?: {};
  value?: string;
  variant?: 'filled';
  placeholder?: string;
  type?: string;
  children: React.ReactNode;
}
