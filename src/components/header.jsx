import ThemeChanger from './theme-changer';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-16 w-full max-w-screen-2xl shrink-0 items-center justify-center gap-x-2 border-b  border-ocean-950 border-opacity-10 bg-transparent px-4 backdrop-blur-lg dark:border-white dark:border-opacity-10 md:border-none">
      <ThemeChanger />
    </header>
  );
};

export default Header;
