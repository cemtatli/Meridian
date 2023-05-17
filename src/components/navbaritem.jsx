import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BellNotification, BookmarkEmpty, Home, ChatBubbleEmpty, User, Settings } from 'iconoir-react';
import classNames from 'classnames';

const NavbarItem = () => {
  const user = useSelector((state) => state.auth.user);
  const navbarMenu = [
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
      icon: ChatBubbleEmpty,
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
    <div className="flex items-center justify-center gap-x-4">
      {navbarMenu.map((link) => (
        <NavLink
          className={({ isActive }) =>
            classNames({
              'flex h-14 items-center justify-between gap-x-2 border-t-2 border-transparent px-2 font-medium text-primary-text-2 dark:text-primary-light/80 xs:px-3 sm:px-4 md:border-b-2 md:px-6 lg:px-8': true,
              'border-t-2 !border-primary-icon md:border-b-2 md:border-t-0': isActive,
            })
          }
          aria-label={link.label}
          title={link.label}
          to={link.path}
          key={link.label}
        >
          <link.icon />
        </NavLink>
      ))}
    </div>
  );
};

export default NavbarItem;
