import { useState, useContext } from 'react';
import { ThemeContext } from '~/context/theme-context';
import { HalfMoon, SunLight } from 'iconoir-react';

const ThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={handleClick} className={`${clicked ? 'animate-bounce-down' : 'animate-bounce-up'}`}>
      {theme === 'dark' ? (
        <span className="flex items-center gap-x-1 text-xs capitalize">
          <SunLight width={20} />
        </span>
      ) : (
        <span className="flex items-center gap-x-1 text-xs capitalize">
          <HalfMoon width={20} />
        </span>
      )}
    </button>
  );
};

export default ThemeChanger;
