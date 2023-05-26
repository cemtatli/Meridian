import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

const LanguageChanger = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLanguage);
  };

  const renderLanguageButton = () => {
    const isTurkish = i18n.language === 'tr';
    const languageCode = isTurkish ? 'TR' : 'US';
    const languageName = isTurkish ? 'Türkçe' : 'English';

    return (
      <button
        className="flex items-center gap-2 rounded-lg text-center transition-colors duration-200 ease-in-out focus:outline-none dark:text-white"
        onClick={toggleLanguage}
      >
        <ReactCountryFlag
          countryCode={languageCode}
          svg
          style={{
            width: '16px',
            height: '16px',
          }}
          title={languageCode}
          aria-label={languageName}
        />
        <span className="text-sm">{languageName}</span>
      </button>
    );
  };

  return <div>{renderLanguageButton()}</div>;
};

export default LanguageChanger;
