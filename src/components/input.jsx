import PropTypes from 'prop-types';
import { useField } from 'formik';

const Input = ({
  children,
  bgColor,
  textSize,
  size,
  type,
  placeholder,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  return (
    <input
      type={`${type}`}
      {...field}
      {...props}
      placeholder={`${placeholder}`}
      className={`rounded-xl border-2 border-gray-200 bg-gray-100 px-4 py-2 text-primary-dark placeholder:text-sm focus:border-ocean-800 focus:outline-none ${bgColor} ${textSize} ${size} rounded-xl shadow-sm`}
    >
      {children}
    </input>
  );
};

Input.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
  textSize: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  bgColor: 'bg-gray-100',
  textSize: 'text-sm',
  size: 'h-10 w-full',
  type: 'text',
  placeholder: '',
};

export default Input;
