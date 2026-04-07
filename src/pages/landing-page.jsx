import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { SupportedByLogos } from '@/components/supported-by-logos';

const BASE_URL = import.meta.env.BASE_URL;

const HERO_VIDEOS = [
  `${BASE_URL}videos/zutto_landing_overlay.mp4`,
  `${BASE_URL}videos/zutto_landing_overlay_2.mp4`,
  `${BASE_URL}videos/zutto_landing_overlay_3.mp4`,
  `${BASE_URL}videos/zutto_landing_overlay_4.mp4`,
];

const VIDEO_DURATIONS = [15000, 15000, 15000, 25000];
const TRANSITION_DURATION = 800;
const FALLBACK_IMAGE = `${BASE_URL}images/hero-poster.svg`;
const WAITLIST_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSc4Ad9wDksTky7wIUvUEVnpXKVQ4iPECG5bID1w8hSIPiGjfQ/viewform?usp=dialog';

/* ─── Shared CTA button ─────────────────────────────────────────────────── */
function WaitlistButton({ className = '', size = 'md', style }) {
  const { t } = useTranslation();
  const sizeClass =
    size === 'lg'
      ? 'px-10 sm:px-14 py-4 sm:py-5 text-base sm:text-lg'
      : 'px-7 sm:px-10 py-3 sm:py-4 text-sm sm:text-base';
  return (
    <a
      href={WAITLIST_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className={`inline-flex items-center gap-2.5 rounded-xl font-bold transition-all duration-200 hover:scale-[1.03] hover:shadow-xl shadow-lg font-nunito touch-manipulation ${sizeClass} ${className}`}
    >
      {t('waitlist.button')}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

/* ─── Section heading component — consistent pattern across all sections ── */
function SectionHeading({
  eyebrow,
  eyebrowColor = 'var(--zutto-green-primary)',
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`mb-14 sm:mb-18 ${center ? 'text-center' : ''}`}>
      <span
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] mb-4"
        style={{ color: eyebrowColor }}
      >
        <span
          className="inline-block w-5 h-px"
          style={{ backgroundColor: eyebrowColor }}
          aria-hidden="true"
        />
        {eyebrow}
        <span
          className="inline-block w-5 h-px"
          style={{ backgroundColor: eyebrowColor }}
          aria-hidden="true"
        />
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zutto-text font-quicksand leading-tight mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-zutto-muted font-nunito font-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── Landing page ──────────────────────────────────────────────────────── */
function LandingPage() {
  const { t } = useTranslation();
  const [videoIndex, setVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef(null);
  const autoAdvanceTimerRef = useRef(null);

  // Detect reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Advance to the next video after each clip's duration
  useEffect(() => {
    if (prefersReducedMotion || hasVideoError) return;
    autoAdvanceTimerRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setVideoIndex((i) => (i + 1) % HERO_VIDEOS.length);
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    }, VIDEO_DURATIONS[videoIndex]);
    return () => clearTimeout(autoAdvanceTimerRef.current);
  }, [videoIndex, prefersReducedMotion, hasVideoError]);

  // Cleanup only on unmount — never wipe src during normal playback
  useEffect(() => {
    return () => {
      clearTimeout(autoAdvanceTimerRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      videoRef.current?.pause();
    };
  }, []);

  const handleVideoCanPlay = () => {
    setHasVideoError(false);
    videoRef.current?.play().catch(() => {
      /* autoplay blocked — browser will show poster frame, that's fine */
    });
  };

  const handleVideoError = () => {
    setHasVideoError(true);
  };

  /* ── Data ─────────────────────────────────────────────────────────────── */
  const challengeKeys = ['example1', 'example2', 'example3', 'example4'];
  const challengeAccents = [
    { rgb: 'var(--zutto-primary-rgb)', solid: 'var(--zutto-green-primary)' },
    { rgb: 'var(--zutto-amber-rgb)', solid: 'var(--zutto-amber)' },
    { rgb: 'var(--zutto-teal-rgb)', solid: 'var(--zutto-teal)' },
    { rgb: 'var(--zutto-primary-rgb)', solid: 'var(--zutto-green-accent)' },
  ];

  const dashboardFeatures = [
    { key: 'feature1' },
    { key: 'feature2' },
    { key: 'feature3' },
    { key: 'feature4' },
    { key: 'feature5' },
  ];
  const dashboardAccents = [
    { rgb: 'var(--zutto-primary-rgb)', solid: 'var(--zutto-green-primary)' },
    { rgb: 'var(--zutto-amber-rgb)', solid: 'var(--zutto-amber)' },
    { rgb: 'var(--zutto-teal-rgb)', solid: 'var(--zutto-teal)' },
    { rgb: 'var(--zutto-primary-rgb)', solid: 'var(--zutto-green-accent)' },
    { rgb: 'var(--zutto-amber-rgb)', solid: 'var(--zutto-amber)' },
  ];

  return (
    <div className="min-h-screen font-nunito bg-zutto-bg text-zutto-text">
      <Header />

      {/* ═══════════════════════════════════════════════════════════════════
          § 1  HERO
          Goal: Immediate value prop. Clear headline, short subtext, single CTA.
          UX:   Full-viewport video backdrop with dark overlay for legibility.
                Green CTA stands out from the white/glass elements used elsewhere.
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Background */}
        <div className="absolute inset-0 z-0">
          {/* Fallback is always rendered; video layers on top when available */}
          <img
            src={FALLBACK_IMAGE}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {!prefersReducedMotion && (
            <video
              key={videoIndex}
              ref={videoRef}
              muted
              playsInline
              autoPlay
              preload="auto"
              src={HERO_VIDEOS[videoIndex]}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transition: `opacity ${TRANSITION_DURATION}ms ease`,
              }}
              onCanPlay={handleVideoCanPlay}
              onEnded={() => setVideoIndex((i) => (i + 1) % HERO_VIDEOS.length)}
              onError={handleVideoError}
            />
          )}
          {/* Two-layer overlay: base dark + subtle vignette at bottom */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'var(--zutto-hero-overlay)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.45) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div
          className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-8 z-10 pt-24 pb-16 gap-7"
          style={{ display: 'flex', minHeight: '100vh' }}
        >
          {/* Status pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              backgroundColor: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(12px)',
              color: '#ffffff',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--zutto-green-accent)' }}
            />
            {t('hero.statusBadge')}
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-white max-w-4xl font-quicksand leading-[1.1] tracking-tight"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
          >
            {t('hero.headline')}
          </h1>

          {/* Subtext */}
          <p
            className="text-lg sm:text-xl max-w-2xl leading-relaxed font-light"
            style={{ color: 'rgba(255,255,255,0.82)', textShadow: '0 1px 8px rgba(0,0,0,0.35)' }}
          >
            {t('hero.subtext')}
          </p>

          {/* CTA */}
          <WaitlistButton
            size="lg"
            style={{
              backgroundColor: 'var(--zutto-green-primary)',
              color: '#ffffff',
            }}
            className="mt-2 hover:opacity-90"
          />

          {/* Scroll hint */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
            <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M10 4v12M5 11l5 5 5-5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 2  WHY ZUTTO
          Goal: Establish the dual-sided problem clearly.
          UX:   Two distinct card identities (green vs amber) to signal user vs
                business perspectives. Large stat anchors the business problem.
                Left-aligned card content reads more naturally than centered.
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zutto-bg"
        aria-labelledby="why-zutto-heading"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow={t('landing.theProblem')}
            title={t('whyZutto.title')}
            subtitle={t('whyZutto.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Consumer card — green left border accent */}
            <div
              className="rounded-2xl p-8 sm:p-10 flex flex-col"
              style={{
                backgroundColor: 'var(--zutto-card)',
                border: '1px solid var(--zutto-border)',
                borderLeft: '4px solid var(--zutto-green-primary)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 shrink-0"
                style={{
                  backgroundColor: `rgba(var(--zutto-primary-rgb), 0.1)`,
                  border: '1px solid rgba(var(--zutto-primary-rgb), 0.2)',
                }}
              >
                🧭
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-zutto-primary mb-3">
                {t('landing.forUsers')}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-zutto-text mb-3 font-quicksand leading-snug">
                {t('whyZutto.userHeadline')}
              </h3>
              <p className="text-zutto-muted leading-relaxed font-nunito flex-1">
                {t('whyZutto.userDescription')}
              </p>
              <div
                className="mt-6 pt-5 flex items-center gap-2"
                style={{ borderTop: '1px solid var(--zutto-border)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="var(--zutto-green-primary)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 8l2 2 4-4"
                    stroke="var(--zutto-green-primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-sm font-semibold text-zutto-primary">{t('whyZutto.userPain')}</p>
              </div>
            </div>

            {/* Business card — amber left border accent */}
            <div
              className="rounded-2xl p-8 sm:p-10 flex flex-col"
              style={{
                backgroundColor: 'var(--zutto-card)',
                border: '1px solid var(--zutto-border)',
                borderLeft: '4px solid var(--zutto-amber)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 shrink-0"
                style={{
                  backgroundColor: `rgba(var(--zutto-amber-rgb), 0.1)`,
                  border: '1px solid rgba(var(--zutto-amber-rgb), 0.2)',
                }}
              >
                🏪
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-zutto-amber mb-3">
                {t('landing.forBusinesses')}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-zutto-text mb-3 font-quicksand leading-snug">
                {t('whyZutto.businessHeadline')}
              </h3>
              <p className="text-zutto-muted leading-relaxed font-nunito flex-1">
                {t('whyZutto.businessDescription')}
              </p>
              {/* Stat block */}
              <div
                className="mt-6 pt-5 flex items-end gap-4"
                style={{ borderTop: '1px solid var(--zutto-border)' }}
              >
                <span className="text-5xl font-bold font-quicksand text-zutto-amber leading-none">
                  {t('whyZutto.stat')}
                </span>
                <div>
                  <p className="text-sm font-semibold text-zutto-amber leading-snug">
                    {t('whyZutto.statLabel')}
                  </p>
                  <p className="text-xs text-zutto-subtle mt-1">{t('whyZutto.statSource')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 3  HOW IT WORKS
          Goal: Show the product flow in 3 clear steps.
          UX:   Numbered steps with large, readable numbers anchor the sequence.
                Replace emoji-in-circle with a cleaner numbered badge.
                Icon sits beside the number to reinforce each step visually.
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zutto-bg-alt"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow={t('landing.simpleByDesign')}
            eyebrowColor="var(--zutto-teal)"
            title={t('howItWorks.title')}
            subtitle={t('howItWorks.subtitle')}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: '01',
                color: 'var(--zutto-green-primary)',
                rgb: 'var(--zutto-primary-rgb)',
                icon: '📍',
                title: t('howItWorks.step1.title'),
                desc: t('howItWorks.step1.description'),
                label: t('landing.step1Label'),
              },
              {
                num: '02',
                color: 'var(--zutto-amber)',
                rgb: 'var(--zutto-amber-rgb)',
                icon: '📲',
                title: t('howItWorks.step2.title'),
                desc: t('howItWorks.step2.description'),
                label: t('landing.step2Label'),
              },
              {
                num: '03',
                color: 'var(--zutto-teal)',
                rgb: 'var(--zutto-teal-rgb)',
                icon: '🎉',
                title: t('howItWorks.step3.title'),
                desc: t('howItWorks.step3.description'),
                label: t('landing.step3Label'),
              },
            ].map((step) => (
              <div
                key={step.num}
                className="rounded-2xl p-8 sm:p-9 flex flex-col hover:-translate-y-1 transition-all duration-200"
                style={{
                  backgroundColor: 'var(--zutto-card)',
                  border: `1px solid rgba(${step.rgb}, 0.2)`,
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                }}
              >
                {/* Step number + label */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-5xl font-black font-quicksand leading-none"
                    style={{ color: `rgba(${step.rgb}, 0.18)` }}
                  >
                    {step.num}
                  </span>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{
                      color: step.color,
                      backgroundColor: `rgba(${step.rgb}, 0.1)`,
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                {/* Icon */}
                <div className="text-4xl mb-5" aria-hidden="true">
                  {step.icon}
                </div>
                <h3
                  className="text-xl font-bold text-zutto-text mb-3 font-quicksand"
                  style={{ color: 'var(--zutto-text)' }}
                >
                  {step.title}
                </h3>
                <p className="text-zutto-muted leading-relaxed font-nunito text-sm flex-1">
                  {step.desc}
                </p>
                {/* Bottom accent rule */}
                <div
                  className="mt-6 h-0.5 rounded-full w-12"
                  style={{ backgroundColor: step.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 4  RADAR SPOTLIGHT
          Goal: Showcase the unique search capability — key differentiator.
          UX:   Left = emotional copy + benefits. Right = product mockup.
                Mockup uses a permanently dark panel so it reads as a "screen"
                in both light and dark themes.
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zutto-bg"
        aria-labelledby="radar-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div>
              <span
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] mb-5"
                style={{ color: 'var(--zutto-green-primary)' }}
              >
                <span
                  className="inline-block w-5 h-px"
                  style={{ backgroundColor: 'var(--zutto-green-primary)' }}
                />
                {t('radarSpotlight.eyebrow')}
              </span>
              <h2
                id="radar-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-zutto-text font-quicksand leading-tight mb-5"
              >
                {t('radarSpotlight.title')}
              </h2>
              <p className="text-zutto-muted text-lg leading-relaxed mb-8 font-nunito">
                {t('radarSpotlight.description')}
              </p>

              {/* Benefit list — vertical, icon + text reads cleaner than pills */}
              <ul className="space-y-3 mb-10">
                {['benefit1', 'benefit2', 'benefit3'].map((key) => (
                  <li key={key} className="flex items-center gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `rgba(var(--zutto-primary-rgb), 0.12)` }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="var(--zutto-green-primary)"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-zutto-text">
                      {t(`radarSpotlight.${key}`)}
                    </span>
                  </li>
                ))}
              </ul>

              <WaitlistButton
                style={{
                  backgroundColor: 'var(--zutto-green-primary)',
                  color: '#ffffff',
                }}
              />
            </div>

            {/* Mockup — always dark surface */}
            <div
              className="rounded-2xl p-5 sm:p-7 shadow-2xl"
              style={{
                backgroundColor: 'var(--zutto-panel-bg)',
                border: '1px solid var(--zutto-panel-border)',
              }}
            >
              {/* Titlebar */}
              <div
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl mb-5"
                style={{ backgroundColor: 'var(--zutto-panel-surface)' }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: 'var(--zutto-amber)' }}
                  />
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: 'var(--zutto-green-accent)' }}
                  />
                </div>
                <span
                  className="flex-1 text-center text-xs font-medium font-mono"
                  style={{ color: 'var(--zutto-panel-text-muted)' }}
                >
                  {t('landing.radarWindowTitle')}
                </span>
              </div>

              {/* Search input */}
              <div
                className="flex items-center gap-2.5 rounded-xl px-4 py-3 mb-5"
                style={{
                  backgroundColor: 'var(--zutto-panel-surface)',
                  border: '1px solid var(--zutto-panel-border)',
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  aria-hidden="true"
                  style={{ color: 'var(--zutto-panel-text-muted)', flexShrink: 0 }}
                >
                  <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.4" />
                  <path
                    d="M10.5 10.5l3 3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  className="font-mono text-sm flex-1 truncate"
                  style={{ color: 'var(--zutto-green-accent)' }}
                >
                  {t('landing.radarPlaceholder')}
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-lg shrink-0 font-medium"
                  style={{
                    color: 'var(--zutto-panel-text-muted)',
                    border: '1px solid var(--zutto-panel-border)',
                  }}
                >
                  {t('landing.radarSearchNearMe')}
                </span>
              </div>

              {/* Result label */}
              <p
                className="text-xs mb-3 px-1 font-medium"
                style={{ color: 'var(--zutto-panel-text-muted)' }}
              >
                <span style={{ color: 'var(--zutto-green-accent)' }}>
                  {t('radarSpotlight.exampleResult')}
                </span>
                &nbsp;&mdash;&nbsp;{t('radarSpotlight.example')}
              </p>

              {/* Result rows */}
              <div className="space-y-2.5">
                {[
                  {
                    name: t('landing.radarPlace1Name'),
                    distance: t('landing.radarPlace1Distance'),
                    price: t('landing.radarPlace1Price'),
                    tag: t('landing.radarPlace1Tag'),
                  },
                  {
                    name: t('landing.radarPlace2Name'),
                    distance: t('landing.radarPlace2Distance'),
                    price: t('landing.radarPlace2Price'),
                    tag: t('landing.radarPlace2Tag'),
                  },
                ].map((place) => (
                  <div
                    key={place.name}
                    className="flex items-center justify-between rounded-xl px-4 py-3"
                    style={{
                      backgroundColor: 'var(--zutto-panel-surface)',
                      border: '1px solid var(--zutto-panel-border)',
                    }}
                  >
                    <div className="min-w-0 mr-3">
                      <p
                        className="text-sm font-semibold font-nunito truncate"
                        style={{ color: '#f1f5f9' }}
                      >
                        {place.name}
                      </p>
                      <p
                        className="text-xs mt-0.5 truncate"
                        style={{ color: 'var(--zutto-panel-text-muted)' }}
                      >
                        {place.tag}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-bold" style={{ color: 'var(--zutto-amber)' }}>
                        {place.price}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: 'var(--zutto-panel-text-muted)' }}
                      >
                        {place.distance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="text-center text-xs mt-4 font-medium"
                style={{ color: 'var(--zutto-panel-text-muted)' }}
              >
                {t('landing.radarMoreOptions')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 5  CHALLENGES
          Goal: Convey the gamification energy without feeling like a toy.
          UX:   Each card has a large emoji + bold points reward as the payoff.
                Horizontal rule with color accent at bottom anchors each card.
                "Points" displayed prominently — that's the hook.
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zutto-bg-alt"
        aria-labelledby="challenges-heading"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow={t('challenges.eyebrow')}
            title={t('challenges.title')}
            subtitle={t('challenges.subtitle')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {challengeKeys.map((key, i) => {
              const c = challengeAccents[i];
              return (
                <div
                  key={key}
                  className="rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--zutto-card)',
                    border: '1px solid var(--zutto-border)',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  }}
                >
                  {/* Header: icon + badge */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-4xl leading-none" role="img" aria-hidden="true">
                      {t(`challenges.${key}.icon`)}
                    </span>
                    <span
                      className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                      style={{
                        color: c.solid,
                        backgroundColor: `rgba(${c.rgb}, 0.1)`,
                        border: `1px solid rgba(${c.rgb}, 0.15)`,
                      }}
                    >
                      {t(`challenges.${key}.badge`)}
                    </span>
                  </div>

                  <h3 className="font-bold text-zutto-text mb-2 font-quicksand text-base">
                    {t(`challenges.${key}.title`)}
                  </h3>
                  <p className="text-zutto-muted text-sm leading-relaxed font-nunito flex-1">
                    {t(`challenges.${key}.description`)}
                  </p>

                  {/* Points — the reward, shown prominently */}
                  <div
                    className="mt-5 pt-4 flex items-center justify-between"
                    style={{ borderTop: `1px solid rgba(${c.rgb}, 0.15)` }}
                  >
                    <p className="text-lg font-black font-quicksand" style={{ color: c.solid }}>
                      {t(`challenges.${key}.points`)}
                    </p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M8 2l1.8 3.6L14 6.5l-3 2.9.7 4.1L8 11.4l-3.7 2.1.7-4.1L2 6.5l4.2-.9L8 2z"
                        stroke={c.solid}
                        strokeWidth="1.25"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 6  BUSINESS DASHBOARD
          Goal: Speak directly to business owners — show tangible value.
          UX:   Lead with a "hero" feature card (full-width top row) then
                support with 4 secondary features below.
                Clean list-style layout replaces uniform grid for clarity.
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zutto-bg"
        aria-labelledby="dashboard-heading"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow={t('businessDashboard.eyebrow')}
            eyebrowColor="var(--zutto-teal)"
            title={t('businessDashboard.title')}
            subtitle={t('businessDashboard.subtitle')}
          />

          {/* Hero feature — full width */}
          <div
            className="rounded-2xl p-7 sm:p-10 mb-6 flex flex-col sm:flex-row items-start gap-6"
            style={{
              backgroundColor: 'var(--zutto-card)',
              border: `1px solid rgba(var(--zutto-primary-rgb), 0.25)`,
              borderLeft: '4px solid var(--zutto-green-primary)',
              boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
            }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{
                backgroundColor: `rgba(var(--zutto-primary-rgb), 0.1)`,
                border: '1px solid rgba(var(--zutto-primary-rgb), 0.2)',
              }}
            >
              {t('businessDashboard.feature1.icon')}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zutto-primary mb-2">
                {t('landing.featuredInsight')}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-zutto-text mb-3 font-quicksand">
                {t('businessDashboard.feature1.title')}
              </h3>
              <p className="text-zutto-muted leading-relaxed font-nunito">
                {t('businessDashboard.feature1.description')}
              </p>
            </div>
          </div>

          {/* Supporting features — 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {dashboardFeatures.slice(1).map(({ key }, i) => {
              const c = dashboardAccents[i + 1];
              return (
                <div
                  key={key}
                  className="rounded-2xl p-6 sm:p-7 flex items-start gap-5"
                  style={{
                    backgroundColor: 'var(--zutto-card)',
                    border: '1px solid var(--zutto-border)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `rgba(${c.rgb}, 0.1)`,
                      border: `1px solid rgba(${c.rgb}, 0.18)`,
                    }}
                  >
                    {t(`businessDashboard.${key}.icon`)}
                  </div>
                  <div>
                    <h3 className="font-bold text-zutto-text mb-1.5 font-quicksand text-base">
                      {t(`businessDashboard.${key}.title`)}
                    </h3>
                    <p className="text-zutto-muted text-sm leading-relaxed font-nunito">
                      {t(`businessDashboard.${key}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 7  VALIDATION — SUPPORTED BY
          Goal: Build credibility with the PR Science Trust / Fase 1 backing.
          UX:   Centered, clean, formal. The logos do the talking.
                A quote-style callout adds personality and context.
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6"
        style={{
          borderTop: '1px solid var(--zutto-border)',
          backgroundColor: 'var(--zutto-bg-alt)',
        }}
        aria-labelledby="supported-by-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] mb-6"
            style={{ color: 'var(--zutto-teal)' }}
          >
            <span
              className="inline-block w-5 h-px"
              style={{ backgroundColor: 'var(--zutto-teal)' }}
            />
            {t('supportedBy.eyebrow')}
            <span
              className="inline-block w-5 h-px"
              style={{ backgroundColor: 'var(--zutto-teal)' }}
            />
          </span>

          <h2
            id="supported-by-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-zutto-text font-quicksand mb-5 leading-tight"
          >
            {t('supportedBy.validationHeadline')}
          </h2>

          {/* Callout quote */}
          <blockquote
            className="relative mx-auto max-w-2xl rounded-2xl p-6 sm:p-8 mb-10 text-left"
            style={{
              backgroundColor: 'var(--zutto-card)',
              border: '1px solid var(--zutto-border)',
              borderLeft: '4px solid var(--zutto-teal)',
            }}
          >
            <p className="text-base sm:text-lg text-zutto-text font-nunito leading-relaxed italic">
              &ldquo;{t('supportedBy.validationDescription')}&rdquo;
            </p>
          </blockquote>

          <SupportedByLogos variant="section" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          § 8  FINAL CTA
          Goal: Convert intent into signup. One message, one action.
          UX:   Full green background signals transition to a resolution.
                White on green is highest contrast combination.
                Secondary social proof line adds reassurance before the click.
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: 'var(--zutto-green-dark)' }}
        aria-labelledby="final-cta-heading"
      >
        {/* Decorative radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 50% 130%, rgba(0,0,0,0.4) 0%, transparent 65%)',
          }}
        />
        {/* Top highlight */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)',
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] mb-6"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            <span
              className="inline-block w-5 h-px"
              style={{ backgroundColor: 'rgba(255,255,255,0.35)' }}
            />
            {t('landing.earlyAccess')}
            <span
              className="inline-block w-5 h-px"
              style={{ backgroundColor: 'rgba(255,255,255,0.35)' }}
            />
          </span>

          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 font-quicksand leading-tight"
          >
            {t('finalCta.title')}
          </h2>

          <p
            className="text-lg sm:text-xl mb-10 sm:mb-12 max-w-xl mx-auto font-nunito font-light leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.78)' }}
          >
            {t('finalCta.subtitle')}
          </p>

          <WaitlistButton
            size="lg"
            className="font-nunito hover:opacity-95"
            style={{
              backgroundColor: '#ffffff',
              color: 'var(--zutto-green-dark)',
            }}
          />

          {/* Social proof nudge */}
          <p className="mt-6 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {t('landing.ctaNudge')}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
