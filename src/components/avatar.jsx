import PropTypes from 'prop-types';

const Avatar = ({ children, size, ring, ...props }) => {
  const ringStyle = ring ? 'ring-2 ring-white dark:ring-black ring-offset-0' : 'ring-0';

  return (
    <div className={`${size}`}>
      <img
        {...props}
        className={`h-full w-full shrink-0 cursor-pointer rounded-full object-contain shadow-lg transition hover:scale-105 ${ringStyle}`}
        src="./default-avatar.png"
      />
      {children}
    </div>
  );
};

Avatar.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  ring: PropTypes.bool,
};

Avatar.defaultProps = {
  size: 'w-20 h-20 sm:h-32 sm:w-32 ',
  ring: true,
};

export default Avatar;
