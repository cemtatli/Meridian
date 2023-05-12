import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from './components/loader';
import routes from './routes';
import { Toaster } from 'sonner';

const App = () => {
  const user = useSelector(state => state.auth.user);
  const Routes = useRoutes(routes);

  if (user === null) {
    return <Loader />;
  }
  return (
    <>
      <Toaster position="top-center" />
      {Routes}
    </>
  );
};

export default App;
