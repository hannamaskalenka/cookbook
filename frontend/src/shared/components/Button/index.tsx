import { Button, Typography } from '@mui/material';
import useStyles from './styles';
import { ButtonProps } from './types';

const CustomButton: React.FC<ButtonProps> = ({
  variant,
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
      variant={variant}
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
