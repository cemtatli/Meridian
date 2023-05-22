import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from './components/loader';
import routes from './routes';
import { Toaster } from 'sonner';
import { Provider } from 'react-wrap-balancer';

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const Routes = useRoutes(routes);

  if (user === null) {
    return <Loader />;
  }
  return (
    <Provider>
      <Toaster richColors position="top-center" />
      {Routes}
    </Provider>
  );
};

export default App;
