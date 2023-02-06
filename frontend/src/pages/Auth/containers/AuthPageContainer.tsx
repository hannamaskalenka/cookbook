import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { AuthMode, AuthModeType } from '../constants';
import { useLoginUser, useSignup } from '../hooks';

const AuthPageContainer = () => {
  const { state } = useLocation();
  const {
    mutate: login,
    isLoading: isLoginLoading,
    isSuccess: isLoginSuccess,
  } = useLoginUser();
  const {
    mutate: signup,
    isLoading: isSignupLoading,
    isSuccess: isSignupSuccess,
  } = useSignup();
  const [mode, setMode] = useState<AuthModeType>(AuthMode.login);

  useEffect(() => {
    if (state) {
      setMode(state);
    }
  }, [state]);

  if (mode === AuthMode.signup) {
    return (
      <SignupForm
        {...{ setMode, signup, isSignupLoading, isSignupSuccess, mode }}
      />
    );
  }
  return <LoginForm {...{ setMode, isLoginSuccess, isLoginLoading, login }} />;
};

export default AuthPageContainer;
