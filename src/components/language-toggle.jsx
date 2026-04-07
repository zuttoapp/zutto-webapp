import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language || 'en';

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center rounded-full p-1 transition-all"
      style={{
        backgroundColor: 'var(--zutto-bg-alt)',
        border: '1px solid var(--zutto-border)',
      }}
      aria-label="Toggle language"
    >
      {/* Sliding indicator */}
      <div
        className="absolute top-1 bottom-1 w-8 rounded-full transition-all duration-300 shadow-sm"
        style={{
          backgroundColor: 'var(--zutto-green-primary)',
          left: currentLang === 'en' ? '0.25rem' : '2.25rem',
        }}
      />

      {/* EN option */}
      <span
        className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300"
        style={{ color: currentLang === 'en' ? '#ffffff' : 'var(--zutto-text-muted)' }}
      >
        EN
      </span>

      {/* ES option */}
      <span
        className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300"
        style={{ color: currentLang === 'es' ? '#ffffff' : 'var(--zutto-text-muted)' }}
      >
        ES
      </span>
    </button>
  );
}

export default LanguageToggle;
