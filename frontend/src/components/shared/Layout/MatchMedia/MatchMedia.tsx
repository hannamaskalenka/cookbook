import { useEffect, useState } from 'react';
import { ChildrenCallback, MatchMediaProps } from '../types';

const MatchMedia = ({
  media,
  children,
}: MatchMediaProps & ChildrenCallback) => {
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(media);

    const listener = () => setIsMatched(mediaQuery.matches);

    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, [media]);

  return <>{children(isMatched)}</>;
};
export default MatchMedia;
