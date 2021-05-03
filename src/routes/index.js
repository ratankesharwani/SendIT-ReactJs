import HomePage from '../views/HomePage/Homepage';
// import Login from '../views/Login/Login';
// import RegisterPage from '../views/RegisterPage/RegisterPage';



const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    // component: Login,
  },
  {
    path: '/Register',
    name: 'Register',
    // component: RegisterPage,
  },
];

export default routes;