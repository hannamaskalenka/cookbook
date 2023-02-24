import { AuthModeType } from 'shared/constants';

export interface SocialMediaProps {
  mode?: AuthModeType;
  handleLoginSwitch?: () => void;
  handleSignupSwitch?: () => void;
}
