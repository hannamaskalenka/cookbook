import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { ROUTES } from 'shared/constants';
import keys from 'locales/keys';

export const PAGES = [
  { title: keys.common.navigation.homePage, route: ROUTES.root },
  { title: keys.common.navigation.aboutPage, route: ROUTES.about },
  { title: keys.common.navigation.exploreRecipesPage, route: ROUTES.explore },
  { title: keys.common.navigation.dashboardPage, route: ROUTES.dashboard },
];
export const SETTINGS = [
  { title: keys.common.addRecipeButton, icon: AddIcon },
  { title: keys.common.auth.logOut, icon: LogoutIcon, isLogout: true },
];
