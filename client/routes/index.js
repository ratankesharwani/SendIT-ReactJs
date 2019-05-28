import HomePage from '../views/HomePage/Homepage';
import DashboardPage from '../views/ProfilePage/ProfilePage';
import ProfilePage from '../views/ProfilePage/ProfilePage';
import NotFoundPage from '../views/NotFoundPage/NotFoundPage';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/dashboard',
    component: DashboardPage,
  },
  {
    path: '/profile',
    component: ProfilePage,
  },
  {
    path: '/not-found',
    component: NotFoundPage,
  },
  {
    component: NotFoundPage,
  },
];

export default routes;
