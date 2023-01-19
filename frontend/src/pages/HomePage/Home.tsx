import { CircularProgress, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'shared/components/Button';
import { useGetRecipes, useLoginUser } from './hooks';
import { accentButtonStyles } from './styles';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: login, isSuccess } = useLoginUser();

  const { refetch, data: recipes, isFetching } = useGetRecipes();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [refetch, isSuccess]);

  const handleRequestButtonClick = async () => {
    login({ username, password });
  };

  return (
    <div>
      <div>
        <Button label="test" color="secondary" sx={accentButtonStyles} />
        <Button
          color="primary"
          onClick={handleRequestButtonClick}
          label={<Typography variant="regular">Send Login Request</Typography>}
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
      <Button variant="contained" label="jestem buttonem contained" />
      <Button variant="text" label="jestem buttonem text" />
      <Button variant="outlined" label="jestem buttonem outline" />

      {isFetching ? (
        <CircularProgress />
      ) : (
        <div>
          Recipes:
          {recipes?.length ? (
            recipes.map((recipe: any) => {
              return (
                <div key={recipe?.id}>
                  <Typography variant="regular">{recipe?.title}</Typography>
                </div>
              );
            })
          ) : (
            <Typography>No recipes found</Typography>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
