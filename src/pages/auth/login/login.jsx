import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Community,
  EyeClose,
  EyeAlt,
  MultiBubble,
  Search,
  ShareAndroid,
  UserLove,
} from 'iconoir-react';
import Button from '~/components/button.jsx';
import Input from '~/components/input.jsx';
import { login } from '~/firebase.js';
import { Formik, Form } from 'formik';
import { LoginSchema } from '~/validation/login-schema.js';
import Logo from '~/components/logo.jsx';

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, actions) => {
    await login(values.username, values.password);
    navigate(location.state?.return_url || '/', {
      replace: true,
    });
  };

  return (
    <div className="flex h-screen w-full ">
      <section className="hidden w-1/2 flex-col items-center justify-center bg-gradient-to-bl from-ocean-500 via-ocean-400 to-ocean-700 text-white md:flex lg:w-3/5">
        <h3 className="mb-5 text-2xl font-bold tracking-tight">What is happening in the world?</h3>
        <nav className="flex w-4/5 flex-col gap-y-4">
          <div className="promotion-item">
            <Search aria-hidden="true" height={24} width={24} />
            <span className="font-medium">Explore Your Passions and Interests</span>
          </div>
          <div className="promotion-item">
            <MultiBubble aria-hidden="true" height={24} width={24} />
            <span className="font-medium">Join the Conversation</span>
          </div>
          <div className="promotion-item">
            <UserLove aria-hidden="true" height={24} width={24} />
            <span className="font-semibold">Connect with Like-Minded People</span>
          </div>
          <div className="promotion-item">
            <ShareAndroid aria-hidden="true" height={22} width={22} />
            <span className="font-medium">Share Your Thoughts and Opinions</span>
          </div>
          <div className="promotion-item">
            <Community aria-hidden="true" height={24} width={24} />
            <span className="font-semibold">Build Meaningful Connections</span>
          </div>
          <Link to={'/auth/register'} className="mt-5">
            <Button>Join the Meridian Community Now</Button>
          </Link>
        </nav>
      </section>
      <section className="flex flex-1 flex-col items-center justify-center bg-primary-light">
        <nav className="flex w-4/5 flex-col gap-4 md:mt-[210px] lg:w-3/5">
          <div className="text-pale-800 flex items-center justify-center gap-x-2 text-center text-2xl font-bold tracking-tight text-primary-dark md:text-start">
            <Logo size="w-8 h-8 shrink-0" />
            <span className="whitespace-nowrap">Welcome to Meridian</span>
          </div>
          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              username: '',
              password: '',
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty, values }) => (
              <Form className="flex flex-col gap-y-4">
                <Input name="username" placeholder="Phone, email or username" />
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
                    {showPassword ? <EyeAlt width={16} /> : <EyeClose width={16} />}
                  </span>
                </div>
                <Button disabled={!isValid || !dirty || isSubmitting} textSize="text-base">
                  Log in
                </Button>
              </Form>
            )}
          </Formik>
          <Link
            to={'/auth/register'}
            className="text-center text-sm font-medium text-primary-dark hover:text-ocean-500  hover:underline"
          >
            Don&apos;t have an account yet? Register
          </Link>
        </nav>
      </section>
    </div>
  );
};

export default LogIn;
