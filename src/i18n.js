import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        explore: "Explore",
      },
      // Hero Section
      hero: {
        statusBadge: "Soon in Puerto Rico",
        headline: "Gamify Your Local Experience!",
        subtext: "🌟 Discover. Play. Earn. Support local businesses with every visit.",
        exploreButton: "Explore Nearby Experiences",
        scanButton: "Scan to Check In"
      },
      // Experience Categories
      categories: {
        music: {
          title: "Live Music Tonight",
          description: "3 venues near you"
        },
        coffee: {
          title: "Cozy Coffee Spots",
          description: "Perfect for working"
        },
        art: {
          title: "Local Art Studios",
          description: "Support creators"
        }
      },
      // How it Works
      howItWorks: {
        title: "How Zutto Works",
        subtitle: "Discover local gems, check in when you visit, and earn points to unlock fun rewards.",
        step1: {
          title: "Discover Local Spots",
          description: "Open the Zutto app to explore nearby local businesses participating in the rewards program."
        },
        step2: {
          title: "Check In",
          description: "When you visit, just tap \"Check In\" to confirm you're there — it only takes a second."
        },
        step3: {
          title: "Earn Points & Perks",
          description: "Rack up points with each check-in and unlock exclusive rewards, offers, and surprises."
        }
      },
      // Live Activity
      liveActivity: {
        badge: "Live Now",
        title: "Alive Now",
        subtitle: "Real activity happening in your community",
        checkedIn: "people just checked in",
        featured: "Featured today",
        newAddition: "New addition",
        trending: "Trending"
      },
      // Browse by Mood
      mood: {
        title: "I want to...",
        subtitle: "Find experiences that match your mood",
        music: {
          title: "Listen to live music",
          description: "Find venues with live performances"
        },
        cafe: {
          title: "Find a quiet café",
          description: "Perfect spots for work or reading"
        },
        relax: {
          title: "Slow down and relax",
          description: "Peaceful spaces to unwind"
        },
        shopping: {
          title: "Support a local maker",
          description: "Discover handmade treasures"
        }
      },
      // Testimonials
      testimonials: {
        title: "Why People Love Zutto",
        subtitle: "Real stories from our community",
        maria: {
          text: "Finally found my favorite coffee spot through Zutto! The owner remembered my order after just two visits. This is what community feels like.",
          name: "Maria Santos",
          role: "Local Explorer"
        },
        carlos: {
          text: "Zutto brought so many new faces to our studio. People actually care about what we're creating here. It's not just foot traffic—it's connection.",
          name: "Carlos Rivera",
          role: "Pottery Studio Owner"
        },
        ana: {
          text: "As a musician, Zutto helps me connect with people who genuinely appreciate live music. Every show feels more intimate and meaningful.",
          name: "Ana Delgado",
          role: "Local Musician"
        }
      },
      // Final CTA
      finalCta: {
        title: "Ready to Connect?",
        subtitle: "Be among the first to discover authentic local experiences with Zutto.",
        joinButton: "🚀 Join the community",
        businessButton: "💼 Get Discovered Without the Stress"
      },
      // Early Access
      earlyAccess: {
        title: "🚀 Zutto is in early access",
        description: "We're starting with check-ins to make supporting local spots fun and effortless. New features are coming soon,  get in early and help shape the future!"
      },
      // What is Zutto
      whatIsZutto: {
        title: "What is Zutto?",
        description: "Zutto is a local discovery app that rewards you for showing up. Just check in at your favorite local spots — from coffee shops to galleries — and earn points you can use for exclusive perks. No receipts, no hassle — just support local and get rewarded."
      },
      // Waitlist
      waitlist: {
        title: "Want early access?",
        description: "Join our early community and be the first to know when Zutto launches in your area.",
        button: "Join the Waitlist"
      }
    }
  },
  es: {
    translation: {
      // Navigation
      nav: {
        explore: "Explorar",
      },
      // Hero Section
      hero: {
        statusBadge: "Pronto en Puerto Rico",
        headline: "¡Gamifica tu Experiencia Local!",
        subtext: "🌟 Descubre. Juega. Gana. Apoya negocios locales con cada visita.",
        exploreButton: "Explorar Experiencias Cercanas",
        scanButton: "Escanear para Registrarse"
      },
      // How it Works
      howItWorks: {
        title: "Cómo Funciona Zutto",
        subtitle: "Descubre joyas locales, regístrate cuando visites, y gana puntos para desbloquear recompensas divertidas.",
        step1: {
          title: "Descubre Lugares Locales",
          description: "Abre la app de Zutto para explorar negocios locales cercanos que participan en el programa de recompensas."
        },
        step2: {
          title: "Regístrate",
          description: "Cuando visites, solo toca \"Registrarse\" para confirmar que estás ahí — solo toma un segundo."
        },
        step3: {
          title: "Gana Puntos y Beneficios",
          description: "Acumula puntos con cada registro y desbloquea recompensas exclusivas, ofertas, y sorpresas."
        }
      },
      // Early Access
      earlyAccess: {
        title: "🚀 Zutto está empezando",
        description: "Ya arrancamos con check-ins para que apoyar lo local sea fácil y divertido.  Vienen cosas nuevas, ¡Únete ahora y ayúdanos a crear esta experiencia juntos!"
      },
      // Final CTA
      finalCta: {
        title: "¿Listo para Conectar?",
        subtitle: "Sé de los primeros en descubrir experiencias locales auténticas con Zutto."
      },
      // What is Zutto
      whatIsZutto: {
        title: "¿Qué es Zutto?",
        description: "Zutto es una aplicación de descubrimiento local que te recompensa por aparecer. Solo regístrate en tu lugar favorito local — de cafeterías a galerías — y gana puntos que puedes usar para perfiles exclusivos. Sin recibos, sin problemas — solo apoya local y consigue recompensado."
      },
      // Waitlist
      waitlist: {
        title: "¿Quieres acceso temprano?",
        description: "Únete a nuestra comunidad temprana y se el primero en saber cuándo Zutto se lanza en tu área.",
        button: "Únete a la lista de espera"
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  })

export default i18n 