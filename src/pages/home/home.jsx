import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Meridian • Home</title>
      </Helmet>
      <nav className="flex w-full items-center justify-center gap-x-16 border-b border-ocean-950 border-opacity-10 bg-transparent px-4 backdrop-blur-lg dark:border-white dark:border-opacity-10 md:border-b-[0px] md:border-t md:border-transparent ">
        <NavLink
          to={'/'}
          end={true}
          className={({ isActive }) =>
            classNames({
              '-mt-[2px] flex items-center gap-x-1.5 border-t-2 py-4 text-sm font-medium': true,
              'border-transparent ': !isActive,
              'border-primary-ocean font-bold text-primary-ocean': isActive,
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
              '-mt-[2px] flex items-center gap-x-1.5 border-t-2 py-4 text-sm font-medium ': true,
              'border-transparent': !isActive,
              'border-primary-ocean font-bold text-primary-ocean ': isActive,
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