import { TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useApi } from 'shared/hooks';
import Button from 'shared/components/Button/Button';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const api = useApi();

  const handleRequestButtonClick = async () => {
    const { data } = await api.post('auth/login', {
      username,
      password,
    });

    console.log(data);

    if (data) {
      const recipes = await api
        .get('recipes', {
          headers: { authorization: `Bearer ${data?.access_token}` },
        })
        .then((response) => response.data);
      console.log('recipes :>> ', recipes);
    }
  };
  return (
    <div>
      <div>
        <Button label="test" type="secondary" />
        <Button
          type="primary"
          onClick={handleRequestButtonClick}
          label={<Typography variant="regular">Send Request</Typography>}
        />
      </div>
      <div>
        <TextField
          variant="filled"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          variant="filled"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <Link to="/dashboard">Check dashboard by clicking</Link>
      <Typography variant="display">Test Typography 0001</Typography>
    </div>
  );
};

export default Home;
