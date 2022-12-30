// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'teams',
    path: '/teams',
    icon: icon('ic_blog'),
  },
  {
    title: 'projects',
    path: '/projects',
    icon: icon('ic_user'),
  },
  {
    title: 'performance',
    path: '/performance',
    icon: icon('ic_analytics'),
  },
  {
    title: 'settings',
    path: '/settings',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'dashboard',
  //   path: '/dashboard/app',
  //   icon: icon('ic_analytics'),
  // },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: icon('ic_user'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
