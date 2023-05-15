import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';
import { Search } from 'iconoir-react';

const SearchBar = ({ label, ...props }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative hidden text-sm md:block md:w-64">
      <span
        className={classNames({
          'pointer-events-none absolute left-0 top-0 flex h-10 w-10 items-center justify-center text-primary-text-2': true,
          hidden: open,
        })}
      >
        <Search width={'20'} height={'20'} className="dark:text-primary-light" />
      </span>
      <input
        {...props}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        placeholder={label}
        className="h-10 w-full rounded-full border border-primary-dark border-opacity-10 bg-primary-light pl-10 text-primary-text-2 outline-none focus:px-4 dark:border-white dark:border-opacity-20 dark:bg-primary-dark/10 dark:text-primary-light dark:placeholder:text-primary-light/80"
      />
    </div>
  );
};

SearchBar.propTypes = {
  label: PropTypes.string,
};

SearchBar.defaultProps = {
  label: '',
};

export default SearchBar;
