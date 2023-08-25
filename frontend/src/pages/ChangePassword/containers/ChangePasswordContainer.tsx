import { AuthMode } from 'pages/Auth/constants';
import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import ChangePasswordRequestScreen from '../components/ChangePasswordRequestScreen';
import { useChangePassword } from '../hooks';

const ChangePasswordContainer: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const emailValue = useWatch({ control, name: 'email' });

  const data = useChangePassword({ toEmail: emailValue });

  console.log('data :>> ', data);

  const sendChangePasswordRequest = handleSubmit(() => {
    data.refetch();
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
