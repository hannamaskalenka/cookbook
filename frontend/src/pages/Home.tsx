import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from 'shared/components/Button';
import Layout from 'shared/components/Layout';

const Home = () => {
  return (
    <Layout>
      <Button color="primary" size="large">
        <Typography variant="contrast">hej!</Typography>
      </Button>
      <Link to="/dashboard">Login</Link>
    </Layout>
  );
};

export default Home;
