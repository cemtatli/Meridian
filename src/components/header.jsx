import { Link } from 'react-router-dom';
import ThemeChanger from './theme-changer';
import { logout } from '~/firebase.js';
import Logo from './logo';

const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between gap-x-2 border-b border-ocean-950 border-opacity-10 bg-transparent px-5 backdrop-blur-2xl dark:border-white dark:border-opacity-10 md:border-none ">
      <Link to={'/'} className="flex items-center gap-x-4 text-sm font-medium">
        <Logo />
      </Link>
      <ThemeChanger />

      <button onClick={logout}>Çıkış</button>
    </header>
  );
};

export default Header;
