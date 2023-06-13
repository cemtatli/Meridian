import { Link } from 'react-router-dom';
import Avatar from './avatar';
import NavbarItem from './navbaritem';
import Logo from './logo';

const Navbar = () => {
  return (
    <header className="fixed bottom-0 z-40 flex h-14 w-full items-center border-t border-ocean-950 border-opacity-10 bg-transparent bg-white shadow dark:border-b dark:border-white dark:border-opacity-10 dark:bg-primary-dark md:sticky md:top-0 ">
      <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-center md:justify-between">
        <Link to={'/'} className="dark:text-primary-thunder hidden items-center gap-x-4 text-xl font-bold md:flex md:text-2xl">
          <Logo size="w-6 h-6 shrink-0" />
          Meridian
        </Link>
        <NavbarItem />
        <div className="hidden md:inline-flex">
          <Avatar size={'h-8 w-8'} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
