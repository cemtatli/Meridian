import PropTypes from 'prop-types';
import { useField } from 'formik';
import { EyeAlt, EyeOff } from 'iconoir-react';
import { useState } from 'react';
import classNames from 'classnames';

const Input = ({ children, bgColor, textSize, size, type, label, ...props }) => {
  const [field] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordType = type === 'password';

  return (
    <label className="relative block rounded-xl">
      <small
        className={classNames({
          'pointer-events-none absolute left-4 -translate-y-1/2 cursor-text font-medium text-primary-text-2 transition-all': true,
          'top-1/2 text-xs': !field.value,
          'top-3 text-xxs font-medium': field.value,
        })}
      >
        {label}
      </small>
      <input
        type={isPasswordType ? (showPassword ? 'text' : 'password') : type}
        {...field}
        {...props}
        className={
          (` ${isPasswordType ? 'pr-8' : ''}  ${bgColor} ${textSize} ${size}`,
          classNames({
            'h-[52px] w-full rounded-xl border-2 border-gray-300 bg-transparent px-4 py-2 text-primary-dark placeholder:text-sm focus:border-ocean-400 focus:placeholder-transparent focus:outline-none': true,
            'pt-4': field.value,
          }))
        }
      >
        {children}
      </input>
      {isPasswordType && (
        <span className="absolute inset-y-0 right-0.5 flex cursor-pointer items-center px-2 text-primary-dark" onClick={toggleShowPassword}>
          {showPassword ? <EyeAlt width={16} height={16} /> : <EyeOff width={16} height={16} />}
        </span>
      )}
    </label>
  );
};

Input.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
  textSize: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  bgColor: 'bg-gray-50',
  textSize: 'text-sm',
  size: 'h-[52px] w-full',
  type: 'text',
  label: '',
};

export default Input;
