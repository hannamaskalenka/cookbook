import { Button, Typography } from '@mui/material';
import useStyles from './styles';

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'warning';
  size?: 'small' | 'medium' | 'large';
  label: string | React.ReactNode;
  onClick?: () => void;
  sx?: any;
  className?: {};
}

const CustomButton: React.FC<ButtonProps> = ({
  label,
  color,
  size,
  sx,
  className,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Button
      color={color}
      size={size}
      variant="contained"
      className={classes.root}
      {...props}
    >
      <Typography className={classes.label} sx={sx?.label}>
        {label}
      </Typography>
    </Button>
  );
};
export default CustomButton;
