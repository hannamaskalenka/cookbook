import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContextProvider } from 'shared/contexts/AuthContext';
import { MediaQueryContextProvider } from 'shared/contexts/MediaQueryContext';
import { StyledEngineProvider } from '@mui/material';
import Layout from 'shared/components/Layout';
import { ROUTES } from 'shared/constants';
import ProtectedRoute from 'shared/components/ProtectedRoute';
import Auth from 'pages/Auth';
import About from 'pages/AboutPage';
import Home from './pages/HomePage';
import Dashboard from './pages/Dashboard';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <Router>
      <AuthContextProvider>
        <MediaQueryContextProvider>
          <QueryClientProvider client={queryClient}>
            <StyledEngineProvider injectFirst>
              <Layout>
                <Routes>
                  <Route path={ROUTES.root} element={<Home />} />
                  <Route path={ROUTES.root} element={<ProtectedRoute />}>
                    <Route path={ROUTES.dashboard} element={<Dashboard />} />
                    <Route path={ROUTES.about} element={<About />} />
                  </Route>
                  <Route path={ROUTES.auth} element={<Auth />} />
                  <Route
                    path={ROUTES.explore}
                    element={<h1>Explore recipes page</h1>}
                  />
                </Routes>
              </Layout>
            </StyledEngineProvider>
          </QueryClientProvider>
        </MediaQueryContextProvider>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
