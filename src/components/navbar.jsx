import { Link } from 'react-router-dom';
import Avatar from './avatar';
import NavbarItem from './navbaritem';
import Logo from './logo';

const Navbar = () => {
  return (
    <header className="fixed bottom-0 z-40 flex h-14 w-full items-center border-t border-ocean-950 border-opacity-10 bg-transparent bg-white shadow-sm dark:border-white dark:border-opacity-10 dark:bg-primary-dark md:sticky md:top-0 md:border-b">
      <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-center px-2 md:justify-between">
        {/*       <SearchBar label={'Search for tweets'} /> */}
        <Link to={'/'} className="dark:text-primary-thunder hidden items-center gap-x-4 text-xl font-bold md:flex md:text-2xl">
          <Logo size="w-6 h-6 shrink-0" />
          Meridian
        </Link>
        <NavbarItem />
        <div className="hidden md:block">
          <Avatar size={'h-8 w-8'} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
