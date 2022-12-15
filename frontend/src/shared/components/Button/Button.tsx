import { styled } from '@mui/material/styles';
import { Button as MUIButton } from '@mui/material';

interface ButtonProps {
  type: 'primary' | 'secondary' | 'warning';
  size?: 'small' | 'medium' | 'large';
  label: string | React.ReactNode;
  onClick?: () => void;
}

const Button = styled(MUIButton)`
  border-radius: 40px;
  width: '222px';
`;

const CustomButton = ({ label, type = 'primary', ...props }: ButtonProps) => (
  <Button type="button" variant="contained" color={type} {...props}>
    {label}
  </Button>
);
export default CustomButton;
