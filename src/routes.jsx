import PrivateRoute from './components/PrivateRoute';

import MainLayout from './layout/main-layout';

import Home from './pages/home';
import LogIn from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile/profile';
import Settings from './pages/settings';
import Notifications from './pages/notifications';
import Bookmarks from './pages/bookmarks';
import Explore from './pages/explore';
import NotFound from './pages/not-found';
import Messages from './pages/messages';
import AuthLayout from './layout/auth-layout';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    auth: true,
    children: [
      {
        index: true,
        element: <Home />,
        auth: true,
      },
      {
        path: '/profile',
        element: <Profile />,
        auth: true,
      },
      {
        path: '/settings',
        element: <Settings />,
        auth: true,
      },
      {
        path: '/notifications',
        element: <Notifications />,
        auth: true,
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
        auth: true,
      },
      {
        path: '/messages',
        element: <Messages />,
        auth: true,
      },
      {
        path: '/explore',
        element: <Explore />,
        auth: true,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LogIn />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];

const AuthenticationChecking = routes =>
  routes.map(route => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>; // Eğer bir auth işlemi var ise bunu PrivateRoute ile sarmala.
    }
    if (route?.children) {
      route.children = AuthenticationChecking(route.children); // Eğer children var ise de aynı işlemi yap.
    }
    return route; // Yok ise normal bir şekilde render et.
  });

export default AuthenticationChecking(routes);
