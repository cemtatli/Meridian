import PropTypes from 'prop-types';

const Button = ({ children, bgColor, textSize, size, type }) => {
  return (
    <button
      type={`${type}`}
      className={`flex w-fit items-center justify-center px-8 py-1.5 font-medium text-white ${bgColor} ${textSize} ${size} rounded-xl shadow-sm`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  textSize: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  bgColor: 'bg-ocean-800',
  textSize: 'text-sm',
  size: 'h-12 w-full',
  type: 'submit',
};

export default Button;
