import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContextProvider } from 'shared/contexts/AuthContext';
import { MediaQueryContextProvider } from 'shared/contexts/MediaQueryContext';
import { StyledEngineProvider } from '@mui/material';
import Layout from 'shared/components/Layout';
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <AuthContextProvider>
      <MediaQueryContextProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <StyledEngineProvider injectFirst>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/about" element={<h1>About page</h1>} />
                  <Route
                    path="/explore"
                    element={<h1>Explore recipes page</h1>}
                  />
                </Routes>
              </Layout>
            </StyledEngineProvider>
          </Router>
        </QueryClientProvider>
      </MediaQueryContextProvider>
    </AuthContextProvider>
  );
};

export default App;
