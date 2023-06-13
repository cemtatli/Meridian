import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from './components/loader';
import routes from './routes';
import { Toaster } from 'sonner';
import { Provider } from 'react-wrap-balancer';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const Routes = useRoutes(routes);

  if (user === null) {
    return <Loader />;
  }
  return (
    <Provider>
      <Analytics />
      <Toaster position="top-right" />
      {Routes}
    </Provider>
  );
};

export default App;
