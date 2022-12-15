import { StyledButton } from './styled';
import { ButtonProps } from './types';

const Button = ({ children, type, ...rest }: ButtonProps) => {
  return (
    <StyledButton type="button" variant="contained" color={type} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
