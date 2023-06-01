import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { ThemeProvider } from './context/theme-context.jsx';
import './i18n.js';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </I18nextProvider>
);
