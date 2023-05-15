import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '~/components/button.jsx';
import Input from '~/components/input.jsx';
import { login } from '~/firebase.js';
import { Formik, Form } from 'formik';
import { LoginSchema } from '~/validation/login-schema.js';
import Logo from '~/components/logo.jsx';
import LoginPresentation from './components/login-presentation';

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values) => {
    await login(values.email, values.password);
    navigate(location.state?.return_url || '/', {
      replace: true,
    });
  };

  return (
    <div className="flex h-screen w-full ">
      <LoginPresentation />
      <section className="flex flex-1 flex-col items-center justify-center bg-white">
        <nav className="flex w-4/5 flex-col gap-4 md:mt-[210px] lg:w-2/4">
          <div className="flex items-center justify-center gap-x-2 text-center text-2xl font-bold tracking-tight text-primary-dark md:text-start">
            <Logo size="w-6 h-6 flex-shrink-0" />
            <span className="whitespace-nowrap">Welcome to Meridian</span>
          </div>
          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className="flex flex-col gap-y-4">
                <Input label={'Email or username'} type="email" name="email" />
                <Input label={'Password'} name="password" type="password" />
                <Button disabled={!isValid || !dirty || isSubmitting} textSize="text-base">
                  Log in
                </Button>
              </Form>
            )}
          </Formik>
          <div className="text-center text-sm font-medium text-primary-dark">
            Don&apos;t have an account yet?
            <Link to={'/auth/register'} className="ml-1 font-semibold hover:text-ocean-500  hover:underline">
              Register
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default LogIn;
