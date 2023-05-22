import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';

const HomeLayout = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Meridian</title>
      </Helmet>
      <nav className="sticky top-0 flex w-full items-center justify-center gap-x-20 border-b border-ocean-950 border-opacity-10 bg-transparent px-4 backdrop-blur-xl dark:border-white dark:border-opacity-10 md:static md:gap-x-16 md:border-b-0 md:border-t-0 md:border-transparent">
        <NavLink
          to={'/'}
          end={true}
          className={({ isActive }) =>
            classNames({
              '-mt-0.5 flex items-center gap-x-1.5  px-4 py-2 text-sm font-medium text-primary-text-2 dark:text-white': true,
              '!font-semibold !text-primary-icon': isActive,
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
              '-mt-0.5 flex items-center gap-x-1.5 py-4 text-sm font-medium text-primary-text-2 dark:text-white': true,
              '!font-semibold !text-primary-icon': isActive,
            })
          }
        >
          {t('Follow')}
        </NavLink>
      </nav>
      <div className="pt-2">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
