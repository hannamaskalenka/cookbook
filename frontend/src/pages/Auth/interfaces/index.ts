import { Dispatch, SetStateAction } from 'react';
import { AuthModeType } from '../constants';

export type LoginDataProps = {
  username: string;
  password: string;
};

export interface LoginFormProps {
  setMode: Dispatch<SetStateAction<AuthModeType>>;
  isLoginSuccess: boolean;
  isLoginLoading: boolean;
  login: (data: LoginDataProps) => void;
}
export type SignupDataProps = {
  username: string;
  password: string;
  email: string;
  retypedPassword: string;
};

export interface SignupFormProps {
  setMode: Dispatch<SetStateAction<AuthModeType>>;
  signup: (data: SignupDataProps) => void;
  mode: AuthModeType;
}
