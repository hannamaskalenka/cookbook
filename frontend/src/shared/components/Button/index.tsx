import { Button, Typography } from '@mui/material';
import classNames from 'classnames';
import useStyles from './styles';
import { ButtonProps } from './types';

const CustomButton: React.FC<ButtonProps> = ({
  variant,
  label,
  color,
  size,
  sx,
  classnames,
  disableFocusRipple,
  ...props
}) => {
  const classes = useStyles();
  const labelClassName = classNames(classes.label, classnames?.label);
  const buttonClassName = classNames(classes.root, classnames?.button);

  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      className={buttonClassName}
      disableFocusRipple={disableFocusRipple}
      {...props}
    >
      <Typography className={labelClassName} sx={sx?.label}>
        {label}
      </Typography>
    </Button>
  );
};
export default CustomButton;
