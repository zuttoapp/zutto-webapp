import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef, useCallback } from 'react'
import Header from '../components/Header'

const HERO_VIDEOS = [
  '/videos/zutto_landing_overlay.mp4',
  '/videos/zutto_landing_overlay_2.mp4',
  '/videos/zutto_landing_overlay_3.mp4',
  '/videos/zutto_landing_overlay_4.mp4'
]

const VIDEO_DURATIONS = [15000, 15000, 15000, 25000]; // Last video: 25s
const TRANSITION_DURATION = 800; // Consistent transition timing
const FALLBACK_IMAGE = '/images/hero-poster.jpg';

function LandingPage() {
  const { t } = useTranslation()
  const [videoIndex, setVideoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [hasVideoError, setHasVideoError] = useState(false)
  const videoRef = useRef(null)
  const transitionTimeoutRef = useRef(null)
  const autoAdvanceTimeoutRef = useRef(null)

  // Cleanup function for video and timeouts
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.src = ''
      }
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
      }
      if (autoAdvanceTimeoutRef.current) {
        clearTimeout(autoAdvanceTimeoutRef.current)
      }
    }
  }, [])

  // Detect reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Auto-advance videos with consistent timing
  useEffect(() => {
    if (prefersReducedMotion || hasVideoError) return
    
    // Clear any existing timeout
    if (autoAdvanceTimeoutRef.current) {
      clearTimeout(autoAdvanceTimeoutRef.current)
    }
    
    autoAdvanceTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(true)
      
      transitionTimeoutRef.current = setTimeout(() => {
        setVideoIndex((i) => (i + 1) % HERO_VIDEOS.length)
        setIsTransitioning(false)
      }, TRANSITION_DURATION)
    }, VIDEO_DURATIONS[videoIndex])
    
    return () => {
      if (autoAdvanceTimeoutRef.current) {
        clearTimeout(autoAdvanceTimeoutRef.current)
      }
    }
  }, [videoIndex, prefersReducedMotion, hasVideoError])

  // Manual video switch with race condition protection
  const handleIndicatorClick = (idx) => {
    if (isTransitioning || idx === videoIndex) return
    
    // Clear auto-advance timeout to prevent conflicts
    if (autoAdvanceTimeoutRef.current) {
      clearTimeout(autoAdvanceTimeoutRef.current)
    }
    
    setIsTransitioning(true)
    
    transitionTimeoutRef.current = setTimeout(() => {
      setVideoIndex(idx)
      setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }

  // Handle video errors
  const handleVideoError = (e) => {
    console.error('Video failed to load:', HERO_VIDEOS[videoIndex], e)
    setHasVideoError(true)
    
    // Try to advance to next video after a delay
    setTimeout(() => {
      setHasVideoError(false)
      setVideoIndex((i) => (i + 1) % HERO_VIDEOS.length)
    }, 2000)
  }

  // Handle successful video load
  const handleVideoLoad = () => {
    setHasVideoError(false)
  }

  return (
    <div className="min-h-screen font-nunito">
      <Header />
      <section className="pt-20 sm:pt-32 lg:pt-40 relative overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Video or fallback image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          {!prefersReducedMotion && !hasVideoError ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="metadata"
              poster={FALLBACK_IMAGE}
              src={HERO_VIDEOS[videoIndex]}
              className="w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: isTransitioning ? 0 : 1 }}
              onEnded={() => setVideoIndex((i) => (i + 1) % HERO_VIDEOS.length)}
              onError={handleVideoError}
              onLoadedData={handleVideoLoad}
            />
          ) : (
            <img
              src={FALLBACK_IMAGE}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          )}
          {/* Optional: subtle overlay for text readability */}
          <div className="absolute inset-0 bg-slate-900/50 pointer-events-none" />
        </div>

        {/* Centered Content */}
        <div className="relative flex flex-col items-center justify-center min-h-[60vh] text-center px-4 z-10">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-4 py-2 mb-8 shadow-xl">
            <div className="w-3 h-3 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#228B22' }} />
            <span className="text-sm text-gray-700 font-medium">{t('hero.statusBadge')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6" style={{
            textShadow: '0 4px 20px rgba(0,0,0,0.6)'
          }}>
            {t('hero.headline')}
          </h1>
          <p className="text-base sm:text-xl text-white max-w-2xl mx-auto font-light" style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.4)'
          }}>
            {t('hero.subtext')}
          </p>
          {/* Dots removed for a cleaner look */}
        </div>
      </section>

      {/* Early Access Section - now inside hero, improved for mobile */}
      <div className="relative z-10 w-full flex justify-center mt-6 sm:mt-10">
        <div className="
          w-full
          max-w-md sm:max-w-xl md:max-w-2xl
          px-4 sm:px-6 py-6 sm:py-8
          bg-yellow-50 bg-opacity-95
          border border-yellow-200
          rounded-xl sm:rounded-2xl
          text-center
          shadow-lg
          backdrop-blur-md
        ">
          <h3 className="text-base sm:text-lg font-bold text-yellow-800 mb-2 font-nunito">{t('earlyAccess.title')}</h3>
          <p className="text-gray-700 text-sm sm:text-base font-nunito">
            {t('earlyAccess.description')}
          </p>
        </div>
      </div>

      {/* How Zutto Works - Clean white background */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="w-full mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-nunito">
              {t('howItWorks.title')}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-nunito font-light px-4 sm:px-0">
              {t('howItWorks.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative max-w-7xl mx-auto">
            {/* Connection lines - Hidden on smaller screens */}
            <div className="hidden lg:block absolute top-1/2 left-1/3 w-1/3 h-1 transform -translate-y-1/2 rounded-full" style={{
              background: `linear-gradient(to right, #228B2250, #a855f750)`
            }}></div>
            <div className="hidden lg:block absolute top-1/2 right-1/3 w-1/3 h-1 transform -translate-y-1/2 rounded-full" style={{
              background: `linear-gradient(to right, #a855f750, #3b82f650)`
            }}></div>
            
            {/* Step 1: Discover */}
            <div className="rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 text-center hover:shadow-3xl transition-all transform hover:scale-105 relative z-10" style={{
              background: `linear-gradient(to bottom right, #228B221a, #64B0461a)`,
              border: '1px solid #228B2230'
            }}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-xl" style={{
                backgroundColor: '#228B22'
              }}>
                📍
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-nunito">{t('howItWorks.step1.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-nunito">{t('howItWorks.step1.description')}</p>
            </div>
            
            {/* Step 2: Check In */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 text-center hover:shadow-3xl transition-all transform hover:scale-105 relative z-10 border border-purple-200/50">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-purple-500 rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-xl">
                📲
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-nunito">{t('howItWorks.step2.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-nunito">{t('howItWorks.step2.description')}</p>
            </div>
            
            {/* Step 3: Earn Rewards */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 text-center hover:shadow-3xl transition-all transform hover:scale-105 relative z-10 border border-blue-200/50">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-500 rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-xl">
                🎉
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-nunito">{t('howItWorks.step3.title')}</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-nunito">{t('howItWorks.step3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Simple & Focused */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative" style={{
        backgroundColor: '#228B22'
      }}>
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 font-nunito">
            {t('finalCta.title')}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 sm:mb-16 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto font-nunito font-light px-4 sm:px-0">
            {t('finalCta.subtitle')}
          </p>
          
          <div className="flex justify-center">
            {/* Join Waitlist Button - Primary */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc4Ad9wDksTky7wIUvUEVnpXKVQ4iPECG5bID1w8hSIPiGjfQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-white hover:bg-gray-50 px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-2xl font-nunito group touch-manipulation"
              style={{ color: '#228B22' }}
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