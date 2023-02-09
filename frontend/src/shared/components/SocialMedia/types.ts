import { AuthModeType } from 'pages/Auth/constants';

export interface SocialMediaProps {
  mode?: AuthModeType;
  handleLoginSwitch?: () => void;
  handleSignupSwitch?: () => void;
}
