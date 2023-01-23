import React from 'react';
import { useForm } from 'react-hook-form';
import ChangePasswordRequestScreen from '../components/ChangePasswordRequestScreen';

const ChangePasswordContainer: React.FC = () => {
  const { control, handleSubmit } = useForm();

  const sendChangePasswordRequest = handleSubmit(() => {
    // use mutate function
  });

  return (
    <ChangePasswordRequestScreen
      control={control}
      sendChangePasswordRequest={sendChangePasswordRequest}
    />
  );
};

export default ChangePasswordContainer;
