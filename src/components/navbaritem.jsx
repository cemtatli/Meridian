import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BookmarkEmpty, Home, ChatBubbleEmpty, User, Settings } from 'iconoir-react';
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
      path: user ? `/${user.username}` : '/profile',
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
    <div className="flex w-full items-center justify-center gap-x-4">
      {navbarMenu.map((link) => (
        <NavLink
          className={({ isActive }) =>
            classNames({
              'flex h-14 items-center justify-between gap-x-2 border-t-2 border-transparent px-4 font-medium text-thunder-900 dark:text-primary-light/80 xs:px-3 sm:px-4 md:border-b-2 md:border-t-0 md:border-opacity-0 md:px-6 lg:px-8': true,
              '!-mt-[2px] scale-105 border-t-2 !border-ocean-600 transition-all duration-150 md:!border-b-2 md:!border-t-0': isActive,
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
