/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
  useEffect,
} from 'react';
import {
  getFromStorage,
  setToStorage,
  removeFromStorage,
} from 'shared/utils/localStorage';

interface IAuthContext {
  isAuthenticated: boolean;
  auth: string;
  setAuth: (token: string) => void;
  handleLogOut: () => void;
}

interface IAuthContextProvider {
  children: ReactNode;
}

const defaultContext = {
  isAuthenticated: false,
  auth: '',
  setAuth: () => {},
  handleLogOut: () => {},
};

export const AuthContext = createContext<IAuthContext>(defaultContext);

export const AuthContextProvider: FC<IAuthContextProvider> = ({ children }) => {
  const storageAuth = JSON.parse(getFromStorage('session') as string) || '';
  const [auth, setAuth] = useState<string>(storageAuth);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(!!storageAuth);

  useEffect(() => {
    setAuthenticated(!!auth);
    setToStorage('session', JSON.stringify(auth));
  }, [auth]);

  const handleLogOut = () => {
    removeFromStorage('session');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, isAuthenticated, handleLogOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    // eslint-disable-next-line no-console
    console.log('Not logged in');
  }
  return context;
};

export default useAuthContext;
