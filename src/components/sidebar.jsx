import { NavLink } from 'react-router-dom';
import { BellNotification, BookmarkEmpty, User, Settings, Home, MessageText } from 'iconoir-react';
import Avatar from './avatar';
import { useSelector } from 'react-redux';
import Logout from './logout';
import classNames from 'classnames';

const Sidebar = () => {
  const user = useSelector((state) => state.auth.user);
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

  return (
    <aside className="flex h-full shrink-0 flex-col items-start justify-start gap-y-2 border-l border-ocean-950 border-opacity-10 px-2 dark:border-white dark:border-opacity-10 md:w-50 md:border-none md:px-0 md:pr-0">
      {sidebarLinks.map((link) => (
        <NavLink
          className={({ isActive }) =>
            classNames({
              'md:px-4" hover:text-primary-ocean flex h-10 items-center gap-x-2 px-2 font-medium hover:rounded-full hover:bg-ocean-50 hover:duration-300 hover:dark:bg-primary-light/10': true,
              'text-primary-ocean rounded-full bg-ocean-100 font-semibold tracking-[0.01em] transition-all dark:bg-primary-light/10 md:bg-transparent md:dark:bg-transparent':
                isActive,
            })
          }
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

      <Avatar title="Profile" ring={false} size="h-[36px] h-[36px] md:w-12 md:h-12" />
    </aside>
  );
};

export default Sidebar;
