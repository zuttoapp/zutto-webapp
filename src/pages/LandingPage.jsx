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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Pulsing Radar Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="radar-ring"></div>
          <div className="radar-ring delay-1000"></div>
          <div className="radar-ring delay-2000"></div>
        </div>
        
        {/* Floating Glow Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute top-60 right-1/4 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Header Component */}
      <Header onSignInClick={handleSignInClick} />

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-12 border border-emerald-200/50 shadow-lg">
            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-gray-700 font-nunito font-medium">{t('hero.statusBadge')}</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight font-nunito">
            {t('hero.headline')}
            <span className="bg-gradient-to-r from-emerald-500 via-purple-500 to-blue-500 bg-clip-text text-transparent block mt-2">{t('hero.headlineAccent')}</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed font-nunito font-light">
            {t('hero.subtext')} <span className="font-semibold text-emerald-600">{t('hero.subtextAccent')}</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 relative">
            {/* Main CTA Button */}
            <button 
              onClick={handleExploreClick}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-emerald-200 flex items-center justify-center gap-3 font-nunito relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10">{t('hero.exploreButton')}</span>
            </button>
            
            {/* Secondary CTA */}
            <Link 
              to="/business/demo"
              className="bg-transparent hover:bg-emerald-50 text-emerald-600 border-2 border-emerald-500 hover:border-emerald-600 px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-100 flex items-center justify-center gap-3 font-nunito group"
            >
              <span>{t('hero.scanButton')}</span>
            </Link>
          </div>

          {/* Experience Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
            <Link 
              to="/search?category=music"
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-white/40 hover:transform hover:scale-105 hover:-rotate-1 transition-all duration-300 block group hover:shadow-2xl hover:shadow-purple-100"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎵</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-nunito">{t('categories.music.title')}</h3>
              <p className="text-gray-600 font-nunito">{t('categories.music.description')}</p>
            </Link>
            
            <Link 
              to="/search?category=coffee"
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-white/40 hover:transform hover:scale-105 hover:rotate-1 transition-all duration-300 block group hover:shadow-2xl hover:shadow-amber-100"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">☕</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-nunito">{t('categories.coffee.title')}</h3>
              <p className="text-gray-600 font-nunito">{t('categories.coffee.description')}</p>
            </Link>
            
            <Link 
              to="/search?category=art"
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 border border-white/40 hover:transform hover:scale-105 hover:-rotate-1 transition-all duration-300 block group hover:shadow-2xl hover:shadow-pink-100"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-nunito">{t('categories.art.title')}</h3>
              <p className="text-gray-600 font-nunito">{t('categories.art.description')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* How Zutto Works */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm relative">
        <div className="w-full mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-6 font-nunito">
              {t('howItWorks.title')}
            </h2>
            <p className="text-2xl text-gray-600 font-nunito font-light">{t('howItWorks.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-7xl mx-auto">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-1 bg-gradient-to-r from-emerald-300 to-purple-300 transform -translate-y-1/2 rounded-full"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-1 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-1/2 rounded-full"></div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition-all transform hover:scale-105 relative z-10 border border-emerald-200/50">
              <div className="w-24 h-24 bg-emerald-500 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl shadow-xl">
                🔍
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-nunito">{t('howItWorks.step1.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-nunito">{t('howItWorks.step1.description')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition-all transform hover:scale-105 relative z-10 border border-purple-200/50">
              <div className="w-24 h-24 bg-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl shadow-xl">
                ✅
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-nunito">{t('howItWorks.step2.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-nunito">{t('howItWorks.step2.description')}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition-all transform hover:scale-105 relative z-10 border border-blue-200/50">
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl shadow-xl">
                💫
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-nunito">{t('howItWorks.step3.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-nunito">{t('howItWorks.step3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Activity Feed */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/80 to-emerald-50/80 backdrop-blur-sm relative">
        <div className="w-full mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-emerald-100/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-emerald-200/50">
              <div className="w-4 h-4 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-emerald-700 font-semibold font-nunito">{t('liveActivity.badge')}</span>
            </div>
            <h2 className="text-6xl font-bold text-gray-900 mb-6 font-nunito">
              {t('liveActivity.title')}
            </h2>
            <p className="text-2xl text-gray-600 font-nunito font-light">{t('liveActivity.subtitle')}</p>
          </div>
          
          <div className="flex overflow-x-auto gap-8 pb-6 scrollbar-hide px-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 min-w-96 hover:shadow-3xl transition-all border border-white/50 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  🍽️
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-orange-600 font-nunito">5</span>
                    <span className="text-sm text-gray-500 font-nunito">{t('liveActivity.checkedIn')}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-nunito">Juan's Grill</h3>
              <p className="text-gray-600 font-nunito">Authentic Puerto Rican cuisine • Old San Juan</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 min-w-96 hover:shadow-3xl transition-all border border-white/50 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  🏺
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-500 text-xl">⭐</span>
                    <span className="text-sm text-gray-500 font-nunito">{t('liveActivity.featured')}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-nunito">Local Pottery Den</h3>
              <p className="text-gray-600 font-nunito">Handmade ceramics • Pottery classes</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 min-w-96 hover:shadow-3xl transition-all border border-white/50 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  📚
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-500 text-xl">🆕</span>
                    <span className="text-sm text-gray-500 font-nunito">{t('liveActivity.newAddition')}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-nunito">Indie Zine Corner</h3>
              <p className="text-gray-600 font-nunito">Independent publications • Santurce</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 min-w-96 hover:shadow-3xl transition-all border border-white/50 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  🎨
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-red-500 text-xl">🔥</span>
                    <span className="text-sm text-gray-500 font-nunito">{t('liveActivity.trending')}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-nunito">Art Walk Downtown</h3>
              <p className="text-gray-600 font-nunito">Monthly art exhibition • Free entry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Mood */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm relative">
        <div className="w-full mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-6 font-nunito">
              {t('mood.title')}
            </h2>
            <p className="text-2xl text-gray-600 font-nunito font-light">{t('mood.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
            <Link 
              to="/search?mood=music"
              className="bg-gradient-to-br from-pink-100/80 to-rose-200/80 backdrop-blur-sm rounded-3xl p-10 text-center hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group block border border-pink-200/50"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🎵</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-nunito">{t('mood.music.title')}</h3>
              <p className="text-gray-600 font-nunito">{t('mood.music.description')}</p>
            </Link>
            
            <Link 
              to="/search?mood=cafe"
              className="bg-gradient-to-br from-blue-100/80 to-cyan-200/80 backdrop-blur-sm rounded-3xl p-10 text-center hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group block border border-blue-200/50"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">☕</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-nunito">{t('mood.cafe.title')}</h3>
              <p className="text-gray-600 font-nunito">{t('mood.cafe.description')}</p>
            </Link>
            
            <Link 
              to="/search?mood=relax"
              className="bg-gradient-to-br from-green-100/80 to-emerald-200/80 backdrop-blur-sm rounded-3xl p-10 text-center hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group block border border-emerald-200/50"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🧘</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-nunito">{t('mood.relax.title')}</h3>
              <p className="text-gray-600 font-nunito">{t('mood.relax.description')}</p>
            </Link>
            
            <Link 
              to="/search?mood=shopping"
              className="bg-gradient-to-br from-purple-100/80 to-violet-200/80 backdrop-blur-sm rounded-3xl p-10 text-center hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group block border border-purple-200/50"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🛍️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-nunito">{t('mood.shopping.title')}</h3>
              <p className="text-gray-600 font-nunito">{t('mood.shopping.description')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50/80 to-purple-50/80 backdrop-blur-sm relative">
        <div className="w-full mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold text-gray-900 mb-6 font-nunito">
              {t('testimonials.title')}
            </h2>
            <p className="text-2xl text-gray-600 font-nunito font-light">{t('testimonials.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all border border-white/50">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic leading-relaxed text-lg font-nunito">
                "{t('testimonials.maria.text')}"
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mr-6 flex items-center justify-center text-white font-bold text-xl font-nunito">
                  M
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg font-nunito">{t('testimonials.maria.name')}</p>
                  <p className="text-gray-500 font-nunito">{t('testimonials.maria.role')}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all border border-white/50">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic leading-relaxed text-lg font-nunito">
                "{t('testimonials.carlos.text')}"
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mr-6 flex items-center justify-center text-white font-bold text-xl font-nunito">
                  C
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg font-nunito">{t('testimonials.carlos.name')}</p>
                  <p className="text-gray-500 font-nunito">{t('testimonials.carlos.role')}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all border border-white/50">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-8 italic leading-relaxed text-lg font-nunito">
                "{t('testimonials.ana.text')}"
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full mr-6 flex items-center justify-center text-white font-bold text-xl font-nunito">
                  A
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg font-nunito">{t('testimonials.ana.name')}</p>
                  <p className="text-gray-500 font-nunito">{t('testimonials.ana.role')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-500 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="w-full max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-6xl font-bold text-white mb-8 font-nunito">
            {t('finalCta.title')}
          </h2>
          <p className="text-2xl text-white/90 mb-16 max-w-3xl mx-auto font-nunito font-light">
            {t('finalCta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Join Community Button */}
            <Link 
              to="/login"
              className="bg-white hover:bg-gray-50 text-emerald-600 px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 font-nunito"
            >
              {t('finalCta.joinButton')}
            </Link>
            {/* Business CTA */}
            <Link 
              to="/dashboard"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3 font-nunito"
            >
              {t('finalCta.businessButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Floating QR Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => navigate('/search')}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 group"
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <span className="text-3xl group-hover:scale-110 transition-transform">📱</span>
          </div>
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .radar-ring {
          position: absolute;
          border: 2px solid rgba(34, 197, 94, 0.3);
          border-radius: 50%;
          width: 300px;
          height: 300px;
          animation: radar-pulse 3s infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        @keyframes radar-pulse {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default LandingPage 