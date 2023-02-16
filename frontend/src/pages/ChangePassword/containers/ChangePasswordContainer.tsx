import { AuthMode } from 'pages/Auth/constants';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import ChangePasswordRequestScreen from '../components/ChangePasswordRequestScreen';

const ChangePasswordContainer: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const sendChangePasswordRequest = handleSubmit(() => {
    // use mutate function
  });

  const switchToLogin = () => navigate(ROUTES.auth, { state: AuthMode.login });

  return (
    <ChangePasswordRequestScreen
      control={control}
      sendChangePasswordRequest={sendChangePasswordRequest}
      switchToLogin={switchToLogin}
    />
  );
};

export default ChangePasswordContainer;
