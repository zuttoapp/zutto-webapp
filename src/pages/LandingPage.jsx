import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'

function LandingPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleExploreClick = () => {
    console.log('User clicked explore - redirecting to search')
    navigate('/search')
  }

  const handleSignInClick = () => {
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-purple-50 to-blue-50 font-nunito relative overflow-hidden">
      {/* Header Component */}
      <Header onSignInClick={handleSignInClick} />

      {/* Hero Section */}
      <section className="pt-40 pb-0 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-12 border border-emerald-200/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-gray-700 font-nunito font-medium">{t('hero.statusBadge')}</span>
          </div>
          
          {/* Main Headline with enhanced typography */}
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight font-nunito hover:scale-105 transition-transform duration-500">
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              {t('hero.headline')}
            </span>
          </h1>
          
          {/* Subtext with better spacing */}
          <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed font-nunito font-light">
            {t('hero.subtext')}
          </p>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="px-4 sm:px-6 lg:px-8 my-24">
        <div className="max-w-3xl mx-auto px-6 py-10 bg-yellow-50 border border-yellow-200 rounded-3xl text-center shadow-md">
          <h3 className="text-xl font-bold text-yellow-800 mb-2 font-nunito">{t('earlyAccess.title')}</h3>
          <p className="text-gray-700 text-lg font-nunito">
            {t('earlyAccess.description')}
          </p>
        </div>
      </section>

      {/* How Zutto Works */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm relative">
        <div className="w-full mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-6 font-nunito">
              {t('howItWorks.title')}
            </h2>
            <p className="text-2xl text-gray-600 font-nunito font-light">
              {t('howItWorks.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-7xl mx-auto">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-1 bg-gradient-to-r from-emerald-300 to-purple-300 transform -translate-y-1/2 rounded-full"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-1 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-1/2 rounded-full"></div>
            
            {/* Step 1: Discover */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition-all transform hover:scale-105 relative z-10 border border-emerald-200/50">
              <div className="w-24 h-24 bg-emerald-500 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl shadow-xl">
                📍
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-nunito">{t('howItWorks.step1.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-nunito">{t('howItWorks.step1.description')}</p>
            </div>
            
            {/* Step 2: Check In */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition-all transform hover:scale-105 relative z-10 border border-purple-200/50">
              <div className="w-24 h-24 bg-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl shadow-xl">
                📲
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-nunito">{t('howItWorks.step2.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-nunito">{t('howItWorks.step2.description')}</p>
            </div>
            
            {/* Step 3: Earn Rewards */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition-all transform hover:scale-105 relative z-10 border border-blue-200/50">
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl shadow-xl">
                🎉
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-nunito">{t('howItWorks.step3.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-nunito">{t('howItWorks.step3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Simple & Focused */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-emerald-500 relative">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-8 font-nunito">
            {t('finalCta.title')}
          </h2>
          <p className="text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-nunito font-light">
            {t('finalCta.subtitle')}
          </p>
          
          <div className="flex justify-center">
            {/* Join Waitlist Button - Primary */}
            <a
              href="https://your-form-link.com" // Replace this with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-emerald-600 px-12 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl font-nunito group"
            >
              <span className="group-hover:scale-110 transition-transform">📧</span>
              <span>{t('waitlist.button')}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LandingPage 