import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { ROUTES } from 'shared/constants';

// TODO: Replace titles with translation keys

export const PAGES = [
  { title: 'Home', route: ROUTES.root },
  { title: 'About', route: ROUTES.about },
  { title: 'Explore Recipes', route: ROUTES.explore },
  { title: 'Dashboard', route: ROUTES.dashboard },
];
export const SETTINGS = [
  { title: 'Add a recipe', icon: AddIcon },
  { title: 'Logout', icon: LogoutIcon },
];
