export interface IInputProps {
  onChange?: () => void;
  className?: {
    label?: string;
    input?: string;
  };
  value?: string;
  placeholder?: string;
  type?: string;
  children?: React.ReactNode;
}
