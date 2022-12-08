import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Button variant="contained" sx={{ bgcolor: 'accent.dark' }} type="button">
        test
      </Button>
      <Link to="/dashboard">Check dashboard by clicking</Link>
      <Typography sx={{ fontFamily: (theme) => theme.typography.display }}>
        Test Typography 0001
      </Typography>
    </div>
  );
};

export default Home;
