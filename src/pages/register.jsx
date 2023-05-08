import { Form, Formik } from 'formik';
import { EyeAlt, EyeClose, LeftRoundArrow } from 'iconoir-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '~/components/button';
import Input from '~/components/input';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, actions) => {
    /*     await login(values.username, values.password);
    navigate(location.state?.return_url || '/', {
      replace: true,
    }); */
  };

  const [typeChange, setTypeChange] = useState(false);

  const handleTypeChange = () => {
    setTypeChange(!typeChange);
  };

  return (
    <section className="flex h-screen flex-col items-center justify-center bg-primary-light md:relative">
      <nav className="flex w-4/5 flex-col gap-4 md:w-3/5 ">
        <span className="text-center text-2xl font-bold tracking-tight text-thunder-800  md:text-start">
          Let&apos;s get you set up on
          <span className="text-ocean-600">&nbsp;meridian.social</span>
        </span>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-y-4">
            <Input placeholder="Username" name="username" />
            <Input
              name="email"
              type={handleTypeChange ? 'email' : 'phone'}
              required
              placeholder="Email or phone number"
            />

            <div className="relative">
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <span
                className="absolute inset-y-0 right-1 flex cursor-pointer items-center px-2 text-primary-dark"
                onClick={handleShowPassword}
              >
                {showPassword ? (
                  <EyeAlt width={16} height={16} />
                ) : (
                  <EyeClose width={16} height={16} />
                )}
              </span>
            </div>
            <div className="relative">
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
              />
              <span
                className="absolute inset-y-0 right-1 flex cursor-pointer items-center px-2 text-primary-dark"
                onClick={handleShowPassword}
              >
                {showPassword ? (
                  <EyeAlt width={16} height={16} />
                ) : (
                  <EyeClose width={16} height={16} />
                )}
              </span>
            </div>
            <Button textSize="text-base">Sign in</Button>
          </Form>
        </Formik>
        <Link
          to={'/auth/login'}
          className="flex items-center justify-center gap-1 text-center text-sm font-medium text-primary-dark hover:text-ocean-500 hover:underline md:absolute md:left-10 md:top-10"
        >
          <LeftRoundArrow />
          Log in
        </Link>
      </nav>
    </section>
  );
};

export default Register;
