import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Avatar = ({ children, size, ring, ...props }) => {
  const ringStyle = ring ? 'ring-2 ring-white dark:ring-black ring-offset-0' : 'ring-0';
  const user = useSelector((state) => state.auth.user);
  return (
    <Link to={user ? `/${user.username}` : ''} href={user ? '' : `/${user?.username}`}>
      <div className={`${size}`}>
        <img
          {...props}
          className={`h-full w-full shrink-0 cursor-pointer rounded-full object-contain ${ringStyle}`}
          src="./default-avatar.png"
        />
        {children}
      </div>
    </Link>
  );
};

Avatar.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  ring: PropTypes.bool,
};

Avatar.defaultProps = {
  size: 'w-20 h-20 md:w-28 md:h-28',
  ring: false,
};

export default Avatar;
