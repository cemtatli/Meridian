import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TabMenu = () => {
  const { t } = useTranslation();
  return (
    <nav className="sticky top-0 flex w-full items-center justify-center gap-x-20 border-b border-ocean-950 border-opacity-10 bg-transparent px-4 backdrop-blur-xl dark:border-white dark:border-opacity-10 md:static md:gap-x-16 md:border-b-0 md:border-t-0 md:border-transparent">
      <NavLink
        to={'/'}
        end={true}
        className={({ isActive }) =>
          classNames({
            '-mt-0.5 flex items-center gap-x-1.5  px-4 py-2 text-sm font-medium text-thunder-600 dark:text-white': true,
            '!font-semibold !text-ocean-600 dark:!text-ocean-400': isActive,
          })
        }
      >
        {t('Following')}
      </NavLink>
      <NavLink
        to={'/follows'}
        end={true}
        className={({ isActive }) =>
          classNames({
            '-mt-0.5 flex items-center gap-x-1.5 py-4 text-sm font-medium text-thunder-600 dark:text-white': true,
            '!font-semibold !text-ocean-600 dark:!text-ocean-400': isActive,
          })
        }
      >
        {t('Follow')}
      </NavLink>
    </nav>
  );
};

export default TabMenu;
