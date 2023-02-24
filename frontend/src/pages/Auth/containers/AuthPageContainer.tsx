import useAuthContext from 'shared/contexts/AuthContext';
import { AuthMode } from 'shared/constants';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { useLoginUser, useSignup } from '../hooks';

const AuthPageContainer = () => {
  const { setMode, mode } = useAuthContext();
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

  return mode === AuthMode.signup ? (
    <SignupForm
      {...{ setMode, signup, isSignupLoading, isSignupSuccess, mode }}
    />
  ) : (
    <LoginForm {...{ setMode, isLoginSuccess, isLoginLoading, login }} />
  );
};

export default AuthPageContainer;
