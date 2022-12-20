import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
// import { Item, Container, Button } from './styled';
import { DropdownProps } from './types';

const Dropdown = ({ closeDropdown }: DropdownProps) => {
  return (
    <div>
      <button type="button" onClick={closeDropdown}>
        <AddIcon sx={{ '& :hover': { color: '#679278' } }} />
        Add item
      </button>
      <div>
        <button type="button" onClick={closeDropdown}>
          <LogoutIcon sx={{ '& :hover': { color: '#679278' } }} />
          Log out
        </button>
      </div>
    </div>
  );
};
export default Dropdown;
