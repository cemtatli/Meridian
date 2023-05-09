import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, bgColor, textSize, size, type, outline, ...props }) => {
  const buttonClasses = classNames(
    'flex w-fit items-center justify-center disabled:opacity-50 rounded-xl px-4 py-1.5 font-medium text-white',
    bgColor,
    textSize,
    size,
    {
      'border border-ocean-500 !text-ocean-500 dark:border-white outline-none bg-transparent dark:text-primary-light hover:bg-ocean-100 hover:text-primary-blue hover:duration-300 hover:dark:bg-primary-light/10':
        outline,
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
};

Button.defaultProps = {
  bgColor: 'bg-ocean-800',
  textSize: 'text-sm',
  size: 'h-12 w-full',
  type: 'submit',
  outline: false,
};

export default Button;
