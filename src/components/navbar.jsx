import Avatar from './avatar';
import NavbarItem from './navbaritem';
import SearchBar from './search-bar';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 flex h-14 w-full items-center border-b border-ocean-950 border-opacity-10 bg-transparent bg-white shadow-sm dark:border-white dark:border-opacity-10 dark:bg-primary-dark">
      <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-center px-4 md:justify-between">
        <SearchBar label={'Search for tweets'} />
        <NavbarItem />
        <div className="hidden md:block">
          <Avatar size={'h-8 w-8'} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
