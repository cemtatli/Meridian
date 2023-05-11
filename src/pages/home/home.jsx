import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex h-fit w-full items-center justify-center">
      <nav className="flex w-full items-center justify-center gap-x-16 border-t">
        <NavLink
          to={'/'}
          end={true}
          className={({ isActive }) =>
            classNames({
              '-mt-[2px] flex items-center gap-x-1.5 border-t-2 py-4 text-sm font-semibold ': true,
              'border-transparent  text-primary-ocean': !isActive,
              'border-primary-ocean text-primary-dark dark:text-primary-light': isActive,
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
              '-mt-[2px] flex items-center gap-x-1.5 border-t-2 py-4 text-sm font-semibold': true,
              'border-transparent text-primary-ocean': !isActive,
              'border-primary-ocean text-primary-dark dark:text-primary-light': isActive,
            })
          }
        >
          {/* <Icon name="tag" size={12} /> */}
          Following
        </NavLink>
      </nav>
    </div>
  );
};

export default Home;
