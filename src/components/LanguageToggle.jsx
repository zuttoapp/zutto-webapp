import { useTranslation } from 'react-i18next'

function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
  }

  const currentLang = i18n.language || 'en'

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-full p-1 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Toggle language"
    >
      {/* Background slider */}
      <div 
        className={`absolute top-1 bottom-1 w-8 bg-emerald-500 rounded-full transition-all duration-300 shadow-md ${
          currentLang === 'en' ? 'left-1' : 'left-9'
        }`}
      />
      
      {/* English option */}
      <div 
        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
          currentLang === 'en' 
            ? 'text-white' 
            : 'text-gray-600 hover:text-emerald-600'
        }`}
      >
        EN
      </div>
      
      {/* Spanish option */}
      <div 
        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
          currentLang === 'es' 
            ? 'text-white' 
            : 'text-gray-600 hover:text-emerald-600'
        }`}
      >
        ES
      </div>
    </button>
  )
}

export default LanguageToggle 