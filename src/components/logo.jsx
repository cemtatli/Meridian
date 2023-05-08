import PropTypes from 'prop-types';

const Logo = ({ size }) => {
  return <div className={`${size} rotate-90 rounded-full border-b-2 border-t-2 border-ocean-600`}> </div>;
};

Logo.propTypes = {
  size: PropTypes.string,
};

Logo.defaultProps = {
  size: 'h-7 w-7',
};

export default Logo;
