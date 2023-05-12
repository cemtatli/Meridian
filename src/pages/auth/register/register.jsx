import { Form, Formik } from 'formik';
import { LogIn } from 'iconoir-react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '~/components/button';
import Input from '~/components/input';
import Logo from '~/components/logo';
import { register } from '~/firebase';
import { RegisterSchema } from '~/validation';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async values => {
    const response = await register(values);
    if (response) {
      navigate(location.state?.return_url || '/', {
        replace: true,
      });
    }
  };

  return (
    <section className="flex h-screen flex-col items-center justify-center bg-white md:relative">
      <nav className="flex w-4/5 flex-col gap-4 md:w-3/5 ">
        <div className="text-center text-2xl font-bold tracking-tight text-thunder-800 md:text-start">
          Let&apos;s get you set up on
          <span className="text-ocean-600">&nbsp;meridian.social</span>{' '}
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
              <Input placeholder="Full Name" name="full_name" />
              <Input placeholder="Username" name="username" />
              <Input placeholder="Email" name="email" type="email" />
              <Input placeholder="Password" name="password" type="password" />
              <Button disabled={!isValid || !dirty || isSubmitting} textSize="text-base">
                Sign in
              </Button>
            </Form>
          )}
        </Formik>
        <Link
          to={'/auth/login'}
          className="flex items-center justify-center gap-1 text-center text-sm font-medium text-primary-dark hover:text-ocean-500 hover:underline md:absolute md:left-10 md:top-10"
        >
          <LogIn />
          Already have an account? Log In
        </Link>
      </nav>
    </section>
  );
};

export default Register;
