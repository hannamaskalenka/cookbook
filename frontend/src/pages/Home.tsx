import { Typography } from '@mui/material';
import Button from 'components/shared/Button';
import Layout from 'components/shared/Layout';
import { Link } from 'react-router-dom';

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
