import Home from '../components/home';
import About from '../components/about';
import Shop from '../components/shop';

const allRouter = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    exact: true
  },
  {
    name: 'AboutParam',
    path: '/about/:id',
    component: About,
    exact: false
  },
  {
    name: 'Shop',
    path: '/shop',
    component: Shop,
    exact: false
  }
];

export default allRouter