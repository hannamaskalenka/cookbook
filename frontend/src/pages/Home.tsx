import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Button type="button">
        <Link to="/dashboard">dashboard by clicking</Link>
      </Button>
      <Button variant="contained" sx={{ bgcolor: 'accent.main' }}>
        Secondary
      </Button>
    </div>
  );
};

export default Home;
