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
      className="relative inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg hover:shadow-xl transition-all duration-300 group"
      style={{ border: '1px solid #228B2230' }}
      aria-label="Toggle language"
    >
      {/* Background slider */}
      <div 
        className={`absolute top-1 bottom-1 w-8 rounded-full transition-all duration-300 shadow-md ${
          currentLang === 'en' ? 'left-1' : 'left-9'
        }`}
        style={{ backgroundColor: '#228B22' }}
      />
      
      {/* English option */}
      <div 
        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
          currentLang === 'en' 
            ? 'text-white' 
            : 'text-gray-600'
        }`}
        style={currentLang !== 'en' ? { color: 'rgb(107 114 128)' } : {}}
      >
        EN
      </div>
      
      {/* Spanish option */}
      <div 
        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
          currentLang === 'es' 
            ? 'text-white' 
            : 'text-gray-600'
        }`}
        style={currentLang !== 'es' ? { color: 'rgb(107 114 128)' } : {}}
      >
        ES
      </div>
    </button>
  )
}

export default LanguageToggle 