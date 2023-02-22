import { TextField } from '@mui/material';
import SearchButton from '../Button';
import { SearchBarProps } from './types';
import useStyles from './styles';

const SearchBar: React.FC<SearchBarProps> = () => {
  const classes = useStyles();
  const handleChange = () => {
    // TODO: Fetching logic
  };
  return (
    <TextField
      variant="filled"
      name="searchInput"
      placeholder="Search by a dish, ingredients, etc."
      // value={search}
      onChange={handleChange}
      className={classes.root}
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <SearchButton
            className={classes.button}
            color="primary"
            label="search"
          />
        ),
      }}
    />
  );
};
export default SearchBar;
