import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'

function Header({ onSignInClick, showLogout = false, onLogout }) {
  const { t } = useTranslation()
  const location = useLocation()

  // Determine which nav item should be highlighted based on current route
  const isActive = (path) => {
    if (path === '/search' && location.pathname === '/search') return true
    if (path === '/dashboard' && location.pathname === '/dashboard') return true
    return false
  }

  return (
    <nav className="bg-white/70 backdrop-blur-xl fixed w-full top-0 z-50 border-b border-white/30">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-emerald-600 font-quicksand hover:text-emerald-700 transition-colors">
          zutto
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link 
            to="/search" 
            className={`transition-colors font-nunito font-medium ${
              isActive('/search') 
                ? 'text-emerald-600 font-semibold' 
                : 'text-gray-700 hover:text-emerald-600'
            }`}
          >
            {t('nav.explore')}
          </Link>
          
          <Link 
            to="/dashboard" 
            className={`transition-colors font-nunito font-medium ${
              isActive('/dashboard') 
                ? 'text-emerald-600 font-semibold' 
                : 'text-gray-700 hover:text-emerald-600'
            }`}
          >
            {t('nav.forBusinesses')}
          </Link>
          
          <a 
            href="#about" 
            className="text-gray-700 hover:text-emerald-600 transition-colors font-nunito font-medium"
          >
            {t('nav.about')}
          </a>
          
          {/* Conditional Sign In / Logout Button */}
          {showLogout ? (
            <button 
              onClick={onLogout}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors font-nunito"
            >
              {t('nav.logout')}
            </button>
          ) : (
            <button 
              onClick={onSignInClick}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-200 font-nunito"
            >
              {t('nav.signIn')}
            </button>
          )}
        </div>
        
        {/* Language Toggle */}
        <LanguageToggle />
      </div>
    </nav>
  )
}

export default Header 