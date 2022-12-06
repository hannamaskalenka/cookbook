import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <button type="button">
        <Link to="/dashboard">Check dashboard by clicking</Link>
      </button>
    </div>
  );
};

export default Home;
