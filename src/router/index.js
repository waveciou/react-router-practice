import Home from '../components/home';
import About from '../components/about';
import Shop from '../components/shop';
import Login from '../components/login';

const allRouter = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
    needAuth: false
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    exact: true,
    needAuth: false
  },
  {
    name: 'AboutParam',
    path: '/about/:id',
    component: About,
    exact: false,
    needAuth: false
  },
  {
    name: 'Shop',
    path: '/shop',
    component: Shop,
    exact: true,
    needAuth: true
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    exact: true,
    needAuth: false
  }
];

export default allRouter