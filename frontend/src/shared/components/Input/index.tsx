import { Stack, TextField, Typography } from '@mui/material';
import classNames from 'classnames';
import useStyles from './styles';
import { IInputProps } from './types';

const CustomInput: React.FC<IInputProps> = ({
  onChange,
  value,
  placeholder,
  type,
  className,
  children,
}) => {
  const classes = useStyles();
  const labelClassName = classNames(classes.label, className?.label);
  const inputClassName = classNames(classes.input, className?.input);

  return (
    <Stack>
      {children && (
        <Typography variant="regular" className={labelClassName}>
          {children}
        </Typography>
      )}
      <TextField
        InputProps={{
          disableUnderline: true,
        }}
        variant="filled"
        type={type}
        placeholder={placeholder}
        value={value}
        className={inputClassName}
        onChange={onChange}
      />
    </Stack>
  );
};
export default CustomInput;
