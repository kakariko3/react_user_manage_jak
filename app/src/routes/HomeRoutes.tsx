import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';

export const homeRoutes = [
  {
    path: 'user_management',
    children: <UserManagement />,
  },
  {
    path: 'setting',
    children: <Setting />,
  },
];
