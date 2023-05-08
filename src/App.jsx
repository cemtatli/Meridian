import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { Toaster } from 'sonner';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Loader from './components/loader';

const App = () => {
  const user = useSelector(state => state.auth.user);
  const Routes = useRoutes(routes);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setRedirect(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!user && !redirect) {
    return <Loader />;
  }

  return (
    <>
      <Toaster richColors closeButton position="top-center" />
      {Routes}
    </>
  );
};

export default App;
