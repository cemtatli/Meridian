import { Helmet } from 'react-helmet';
import Logout from '~/components/logout';
import { useTranslation } from 'react-i18next';
import ThemeChanger from '~/components/theme-changer';
import LanguageChanger from '~/components/language-changer.jsx';

const Settings = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Meridian • Settings</title>
      </Helmet>
      <section className="h-screen-64 w-full overflow-auto px-5">
        <article className="mx-auto max-w-2xl py-12">
          <h3 className="mb-8 text-2xl font-bold text-primary-dark dark:text-gray-100">{t('Settings.title')}</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-lg bg-white px-4 py-2.5 shadow-md dark:bg-gray-800">
              <label className="text-gray-800 dark:text-white">{t('ThemeChange')}</label>
              <ThemeChanger />
            </div>
            <div className="flex items-center justify-between rounded-lg bg-white px-4 py-2.5 shadow-md dark:bg-gray-800">
              <span className="text-gray-800 dark:text-white">{t('Language')}</span>
              <LanguageChanger />
            </div>
            <div className="flex items-center justify-between rounded-lg bg-white px-4 py-2.5 shadow-md dark:bg-gray-800">
              <span className="text-gray-800 dark:text-white">{t('LogOut')}</span>
              <Logout />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Settings;
