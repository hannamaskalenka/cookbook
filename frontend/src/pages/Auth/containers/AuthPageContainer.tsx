import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignupForm';
import { AuthMode, AuthModeType } from '../constants';
import { useLoginUser, useSignup } from '../hooks';

const AuthPageContainer = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthModeType>(AuthMode.login);

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

  useEffect(() => {
    if (isLoginSuccess || isSignupSuccess) {
      navigate(ROUTES.dashboard);
    }
  });

  useEffect(() => {
    if (state) {
      setMode(state);
    }
  }, [state]);

  const switchToLogin = () => setMode(AuthMode.login);
  const switchToSignUp = () => setMode(AuthMode.signup);

  return mode === AuthMode.signup ? (
    <SignUpForm
      {...{ switchToLogin, signup, isSignupLoading, isSignupSuccess, mode }}
    />
  ) : (
    <LoginForm {...{ switchToSignUp, isLoginSuccess, isLoginLoading, login }} />
  );
};

export default AuthPageContainer;
