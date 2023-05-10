import PropTypes from 'prop-types';
import { useField } from 'formik';
import { EyeAlt, EyeClose } from 'iconoir-react';
import { useState } from 'react';

const Input = ({ children, bgColor, textSize, size, type, placeholder, ...props }) => {
  const [field] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordType = type === 'password';

  return (
    <div className="relative">
      <input
        type={isPasswordType ? (showPassword ? 'text' : 'password') : type}
        {...field}
        {...props}
        placeholder={`${placeholder}`}
        className={`rounded-xl border-2 border-gray-300 bg-transparent px-4 py-2 text-primary-dark placeholder:text-sm focus:border-ocean-800 focus:outline-none 
        ${isPasswordType ? 'pr-8' : ''}  ${bgColor} ${textSize} ${size} `}
      >
        {children}
      </input>
      {isPasswordType && (
        <span
          className="absolute inset-y-0 right-0.5 flex cursor-pointer items-center px-2 text-primary-dark"
          onClick={toggleShowPassword}
        >
          {showPassword ? <EyeAlt width={16} /> : <EyeClose width={16} />}
        </span>
      )}
    </div>
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
  size: 'h-12 w-full',
  type: 'text',
  placeholder: '',
};

export default Input;
