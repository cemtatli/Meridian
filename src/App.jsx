import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from './components/loader';
import routes from './routes';
import { Toaster } from 'sonner';
import { Provider } from 'react-wrap-balancer';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const Routes = useRoutes(routes);

  if (user === null) {
    return <Loader />;
  }
  return (
    <I18nextProvider i18n={i18n}>
      <Provider>
        <Toaster richColors position="top-center" />
        {Routes}
      </Provider>
    </I18nextProvider>
  );
};

export default App;
