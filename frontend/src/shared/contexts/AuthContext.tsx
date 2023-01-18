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
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants';

interface IUser {
  username: string;
  token: string;
}

interface IAuthContext {
  isAuthenticated: boolean;
  auth: IUser;
  setAuth: (user: IUser) => void;
  handleLogOut: () => void;
}

interface IAuthContextProvider {
  children: ReactNode;
}

const defaultContext = {
  isAuthenticated: false,
  auth: { username: '', token: '' },
  setAuth: () => {},
  handleLogOut: () => {},
};

export const AuthContext = createContext<IAuthContext>(defaultContext);

export const AuthContextProvider: FC<IAuthContextProvider> = ({ children }) => {
  const navigate = useNavigate();
  const storageAuth = JSON.parse(getFromStorage('session') as string) || {};
  const [auth, setAuth] = useState<IUser>(storageAuth);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(
    !!storageAuth?.token,
  );

  useEffect(() => {
    setAuthenticated(!!auth?.token);
    setToStorage('session', JSON.stringify(auth));
  }, [auth, auth?.token]);

  const handleLogOut = () => {
    removeFromStorage('session');
    setAuthenticated(false);
    navigate(ROUTES.root);
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
