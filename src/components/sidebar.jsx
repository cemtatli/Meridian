import { NavLink } from 'react-router-dom';
import Avatar from './avatar';
import {
  BellNotification,
  Compass,
  BookmarkEmpty,
  User,
  Settings,
  Home,
  MessageText,
} from 'iconoir-react';
import UserProfile from '~/pages/profile/components/user-profile';

const Sidebar = () => {
  return (
    <div className="mt-auto flex h-screen flex-col items-center justify-center border-l border-ocean-950  border-opacity-10 px-2 dark:border-white dark:border-opacity-10 md:border-none md:px-0">
      <aside className="mt-auto flex h-screen-64 shrink-0 flex-col items-start justify-start gap-y-1 pb-4 md:w-60 md:pr-0">
        <NavLink className="navlink-item" to={'/'}>
          <Home /> <span className="mr-10 hidden md:block">Home</span>
        </NavLink>
        <NavLink className="navlink-item" to={'/profile'}>
          <User /> <span className="mr-10 hidden md:block">Profile</span>
        </NavLink>
        <NavLink className="navlink-item" to={'/notifications'}>
          <BellNotification />
          <span className="mr-10 hidden md:block">Notifications</span>
        </NavLink>
        <NavLink className="navlink-item" to={'/messages'}>
          <MessageText />{' '}
          <span className="mr-10 hidden md:block">Messages</span>
        </NavLink>
        <NavLink className="navlink-item" to={'/explore'}>
          <Compass /> <span className="mr-10 hidden md:block">Explore</span>
        </NavLink>
        <NavLink className="navlink-item" to={'/bookmarks'}>
          <BookmarkEmpty />{' '}
          <span className="mr-10 hidden md:block">Bookmarks</span>
        </NavLink>
        <NavLink className="navlink-item" to={'/settings'}>
          <Settings />
          <span className="mr-10 hidden md:block">Settings</span>
        </NavLink>
        <div className="mt-auto flex w-full items-center justify-center md:justify-start">
          <Avatar ring={false} size="h-10 w-10 md:w-12 md:h-12" />
          <UserProfile />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
