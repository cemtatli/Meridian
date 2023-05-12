import { Link } from 'react-router-dom';
import ThemeChanger from './theme-changer';
import Logo from './logo';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-16 w-full max-w-screen-2xl shrink-0 items-center justify-between gap-x-2 border-b  border-ocean-950 border-opacity-10 bg-transparent px-4 backdrop-blur-lg dark:border-white dark:border-opacity-10 md:border-none">
      <Link
        to={'/'}
        className="flex items-center gap-x-4 text-xl font-bold  dark:text-primary-thunder md:text-2xl"
      >
        <Logo size="w-6 h-6 shrink-0" />
        Meridian
      </Link>
      <ThemeChanger />
    </header>
  );
};

export default Header;
