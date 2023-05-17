import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Meridian • Home</title>
      </Helmet>
      <nav className="sticky top-0 flex w-full items-center justify-center gap-x-16 border-b border-ocean-950 border-opacity-10 bg-transparent px-4 backdrop-blur-xl dark:border-white dark:border-opacity-10 md:static md:border-b-[0px] md:border-t md:border-transparent ">
        <NavLink
          to={'/'}
          end={true}
          className={({ isActive }) =>
            classNames({
              '-mt-0.5 flex items-center gap-x-1.5  py-4 text-sm font-medium text-primary-text-2 dark:text-white': true,
              '!font-semibold !text-primary-icon': isActive,
            })
          }
        >
          For you
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
          Following
        </NavLink>
      </nav>
      <div className="px-4 pt-2">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
