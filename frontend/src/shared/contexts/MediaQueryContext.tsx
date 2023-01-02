import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createContext, useContext, ReactNode, FC } from 'react';

interface IMediaQueryContext {
  isMobile: boolean;
}

interface IMediaQueryContextProvider {
  children: ReactNode;
}

const defaultContext = {
  isMobile: false,
};

const MediaQueryContext = createContext<IMediaQueryContext>(defaultContext);

export const MediaQueryContextProvider: FC<IMediaQueryContextProvider> = ({
  children,
}) => {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MediaQueryContext.Provider value={{ isMobile }}>
      {children}
    </MediaQueryContext.Provider>
  );
};

const useMediaQueryContext = () => {
  const context = useContext(MediaQueryContext);
  if (!context) {
    // eslint-disable-next-line no-console
    console.log('Context has not been created');
  }
  return context;
};

export default useMediaQueryContext;
