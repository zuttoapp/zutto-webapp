import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'
import ZuttoLogo from '../assets/zuttoapp-1000x1000 1.svg'

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
        <img src={ZuttoLogo} alt="Zutto logo" className="h-8 w-auto" />
  
        
        {/* Language Toggle */}
        <LanguageToggle />
      </div>
    </nav>
  )
}

export default Header 