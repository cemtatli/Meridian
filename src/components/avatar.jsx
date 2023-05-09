import PropTypes from 'prop-types';

const Avatar = ({ children, size, ring, ...props }) => {
  const user = {
    user: 'Cem',
    username: '@cemtatli',
    avatar:
      'https://avatars.githubusercontent.com/u/65294379?s=400&u=76ea31cc3128f0a117a09ec4ded99b6cba258c73&v=4',
  };

  const ringStyle = ring ? 'ring-2 ring-white ring-offset-0' : 'ring-0';

  return (
    <div className={`${size}`}>
      <img
        {...props}
        className={`h-full w-full shrink-0 cursor-pointer rounded-full object-contain shadow-lg transition hover:scale-105 ${ringStyle}`}
        src={user.avatar}
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
  size: 'w-24 h-24 xs:h-28 xs:w-28 sm:w-32 sm:h-32 md:w-40 md:h-40',
  ring: true,
};

export default Avatar;
