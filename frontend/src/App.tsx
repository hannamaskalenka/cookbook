import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MediaQueryContextProvider } from 'shared/contexts/MediaQueryContext';
import Layout from 'shared/components/Layout';
import Home from './pages/HomePage/Home';
import Dashboard from './pages/Dashboard';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <MediaQueryContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<h1>About page</h1>} />
              <Route path="/explore" element={<h1>Explore recipes page</h1>} />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </MediaQueryContextProvider>
  );
};

export default App;
