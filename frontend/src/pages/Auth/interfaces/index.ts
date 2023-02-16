import { AuthModeType } from '../constants';

export type LoginDataProps = {
  username: string;
  password: string;
};

export interface LoginFormProps {
  switchToSignUp: () => void;
  isLoginSuccess: boolean;
  isLoginLoading: boolean;
  login: (data: LoginDataProps) => void;
}
export type SignUpDataProps = {
  username: string;
  password: string;
  email: string;
  retypedPassword: string;
};

export interface SignUpFormProps {
  switchToLogin: () => void;
  signup: (data: SignUpDataProps) => void;
  mode: AuthModeType;
}
