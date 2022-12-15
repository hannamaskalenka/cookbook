import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { Item, Container, Button } from './styled';
import { DropdownProps } from './types';

const Dropdown = ({ closeDropdown }: DropdownProps) => {
  return (
    <Container>
      <Item
        onClick={() => {
          closeDropdown();
        }}
      >
        <AddIcon sx={{ '& :hover': { color: '#679278' } }} />
        Add item
      </Item>
      <Item>
        <Button
          onClick={() => {
            closeDropdown();
          }}
        >
          <LogoutIcon sx={{ '& :hover': { color: '#679278' } }} />
          Log out
        </Button>
      </Item>
    </Container>
  );
};
export default Dropdown;
