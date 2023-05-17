import { Form, Formik } from 'formik';
import { LogIn } from 'iconoir-react';
import { Helmet } from 'react-helmet';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '~/components/button';
import Input from '~/components/input';
import { register } from '~/firebase';
import { RegisterSchema } from '~/validation';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values) => {
    const response = await register(values);
    if (response) {
      navigate(location.state?.return_url || '/', {
        replace: true,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Let's get you set up on meridian.social</title>
      </Helmet>
      <section className="flex h-screen flex-col items-center justify-center bg-white md:relative">
        <nav className="flex w-4/5 flex-col gap-4 md:w-3/5 ">
          <div className="w-full select-none text-center text-2xl font-bold tracking-tight text-thunder-800 md:text-start">
            Let&apos;s get you set up on
            <span className="ml-1 bg-gradient-to-l from-ocean-500 via-ocean-500 to-ocean-700 bg-clip-text font-extrabold text-transparent">
              meridian.social
            </span>
          </div>
          <Formik
            validationSchema={RegisterSchema}
            initialValues={{
              username: '',
              full_name: '',
              email: '',
              password: '',
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className="flex flex-col gap-y-4">
                <Input label="Email" name="email" type="email" />
                <Input label="Full Name" name="full_name" />
                <Input label="Username" name="username" />
                <Input label="Password" name="password" type="password" />
                <Button disabled={!isValid || !dirty || isSubmitting} textSize="text-base">
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>
          <div className="flex items-center justify-center gap-2 text-center text-sm font-medium text-primary-dark md:absolute md:left-10 md:top-10">
            <LogIn />
            Already have an account?
            <Link to={'/auth/login'} className="font-bold hover:text-ocean-500 hover:underline">
              Log In
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Register;
