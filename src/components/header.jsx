import { Link } from 'react-router-dom';

import { logout } from '~/firebase';
import ThemeChanger from './theme-changer';

const Header = () => {
  return (
    <header className="fixed top-0 z-30 flex h-16 w-full items-center justify-between gap-x-2 border-b border-ocean-950 border-opacity-10 bg-transparent px-5 backdrop-blur-md dark:border-white dark:border-opacity-10 md:border-none ">
      <Link
        to={'/'}
        className="flex items-center gap-x-4 text-xl font-bold  dark:text-primary-thunder md:text-2xl"
      >
        Meridian
      </Link>
      <ThemeChanger />
      <button className="text-xs" onClick={logout}>
        Çıkış
      </button>
    </header>
  );
};

export default Header;
