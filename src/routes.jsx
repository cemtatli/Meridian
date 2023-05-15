import PrivateRoute from './components/private-route';

import MainLayout from './layout/main-layout';
import AuthLayout from './layout/auth-layout';

import LogIn from './pages/auth/login';
import Register from './pages/auth/register';
import Settings from './pages/settings';
import Notifications from './pages/notifications';
import Bookmarks from './pages/bookmarks';
import NotFound from './pages/not-found';
import Messages from './pages/messages';
import Following from './pages/home/components/following';
import ForYou from './pages/home/components/for-you';
import HomeLayout from './pages/home';
import ProfileLayout from './pages/profile';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    auth: true,
    children: [
      {
        index: '/',
        element: <HomeLayout />,
        auth: true,
        children: [
          {
            path: 'follows',
            element: <Following />,
            auth: true,
          },
          {
            index: '/',
            element: <ForYou />,
            auth: true,
          },
        ],
      },
      {
        path: ':username',
        element: <ProfileLayout />,
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

// eslint-disable-next-line react-refresh/only-export-components
const AuthenticationChecking = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>; // Eğer bir auth işlemi var ise bunu PrivateRoute ile sarmala.
    }
    if (route?.children) {
      route.children = AuthenticationChecking(route.children); // Eğer childreni var ise de aynı işlemi yap.
    }
    return route; // Yok ise normal bir şekilde render et.
  });

// eslint-disable-next-line react-refresh/only-export-components
export default AuthenticationChecking(routes);
