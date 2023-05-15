import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, bgColor, textSize, size, type, outline, secondary, ...props }) => {
  const buttonClasses = classNames(
    'flex items-center justify-center rounded-xl disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-4 py-1.5 font-medium text-white',
    bgColor,
    textSize,
    size,
    {
      'border border-ocean-500 !text-ocean-500 dark:border-white outline-none bg-transparent dark:text-primary-light hover:bg-ocean-100 hover:text-primary-blue hover:duration-300 hover:dark:bg-primary-light/10':
        outline,
    },
    {
      'bg-white !font-semibold !text-ocean-500 text-lg w-full py-3': secondary,
    }
  );

  return (
    <button {...props} type={`${type}`} className={buttonClasses}>
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
  outline: PropTypes.bool,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  bgColor: 'bg-ocean-800',
  textSize: 'text-sm',
  size: 'h-12 w-full m-auto',
  type: 'submit',
  outline: false,
  secondary: false,
};

export default Button;
