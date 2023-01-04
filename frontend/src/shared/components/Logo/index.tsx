import React from 'react';
import { Link } from 'react-router-dom';
import useMediaQueryContext from 'shared/contexts/MediaQueryContext';
import LogoFooterIcon from 'shared/icons/LogoFooterIcon';
import LogoIcon from 'shared/icons/LogoIcon';
import LogoMobileIcon from 'shared/icons/LogoMobileIcon';

interface ILogoProps {
  className?: string | object;
  isFooter?: boolean;
}

const Logo: React.FC<ILogoProps> = ({ className, isFooter }) => {
  const { isMobile } = useMediaQueryContext();
  const desktopIcon = isFooter ? (
    <LogoFooterIcon className={className} />
  ) : (
    <LogoIcon className={className} />
  );

  return (
    <Link to="/">
      {isMobile ? <LogoMobileIcon className={className} /> : desktopIcon}
    </Link>
  );
};

export default Logo;
