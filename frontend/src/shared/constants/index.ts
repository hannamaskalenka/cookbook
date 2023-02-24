export const ROUTES = {
  root: '/',
  dashboard: '/dashboard',
  about: '/about',
  explore: '/explore',
  auth: '/auth',
};

export enum LanguageKeysEnum {
  en = 'en',
}
export enum AuthMode {
  login = 'login',
  signup = 'signup',
}
export type AuthModeType = AuthMode.login | AuthMode.signup;
