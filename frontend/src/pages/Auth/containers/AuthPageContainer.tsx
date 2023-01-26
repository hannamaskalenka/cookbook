import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { AuthMode, AuthModeType } from '../constants';
import { useLoginUser, useSignup } from '../hooks';

const AuthPageContainer = () => {
  const { state } = useLocation();
  const { mutate: login, isLoading, isSuccess } = useLoginUser();
  const { mutate: signup } = useSignup();
  const [mode, setMode] = useState<AuthModeType>(AuthMode.login);

  useEffect(() => {
    if (state) {
      setMode(state);
    }
  }, [state]);

  const showUI = () => {
    switch (mode) {
      case AuthMode.login:
        return <LoginForm {...{ setMode, isSuccess, isLoading, login }} />;
      case AuthMode.signup:
        return <SignupForm {...{ signup }} />;
      default:
        return <LoginForm {...{ setMode, isSuccess, isLoading, login }} />;
    }
  };
  return <>{showUI()}</>;
};

export default AuthPageContainer;
