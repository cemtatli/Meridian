import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  BellNotification,
  Compass,
  BookmarkEmpty,
  User,
  Settings,
  Home,
  MessageText,
} from 'iconoir-react';
import Avatar from './avatar';
import { useSelector } from 'react-redux';
import Logout from './logout';

const Sidebar = () => {
  const user = useSelector(state => state.auth.user);
  const sidebarLinks = [
    {
      label: 'Home',
      icon: Home,
      path: '/',
    },
    {
      label: 'Profile',
      icon: User,
      path: `/${user?.username}`,
    },
    {
      label: 'Notifications',
      icon: BellNotification,
      path: '/notifications',
    },
    {
      label: 'Messages',
      icon: MessageText,
      path: '/messages',
    },
    {
      label: 'Explore',
      icon: Compass,
      path: '/explore',
    },
    {
      label: 'Bookmarks',
      icon: BookmarkEmpty,
      path: '/bookmarks',
    },
    {
      label: 'Settings',
      icon: Settings,
      path: '/settings',
    },
  ];

  useEffect(() => {
    if (!user) {
      // Kullanıcı bilgisi henüz yüklenmediyse, yeniden yükleme yapın
      window.location.reload();
    }
  }, [user]);

  return (
    <aside className="flex h-full shrink-0 flex-col items-start justify-start gap-y-1 border-r border-ocean-950 border-opacity-10 px-2 pb-5 dark:border-white dark:border-opacity-10 md:w-50 md:border-none md:px-0 md:pr-0">
      {sidebarLinks.map(link => (
        <NavLink
          className="navlink-item flex h-10 items-center gap-x-2 px-2 font-medium hover:rounded-full hover:bg-ocean-100 hover:text-primary-ocean hover:duration-300 hover:dark:bg-primary-light/10 md:px-4"
          aria-label={link.label}
          title={link.label}
          to={link.path}
          key={link.label}
        >
          <link.icon />
          <span className="mr-8 hidden md:block">{link.label}</span>
        </NavLink>
      ))}
      <Logout />
      <Link to={`/${user?.username}`}>
        <Avatar title="Profile" ring={false} size="h-10 w-10 md:w-12 md:h-12" />
      </Link>
    </aside>
  );
};

export default Sidebar;
