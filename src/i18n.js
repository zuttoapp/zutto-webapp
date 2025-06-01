import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        explore: "Explore",
        forBusinesses: "For Businesses",
        about: "About",
        signIn: "Sign In",
        dashboard: "Dashboard",
        logout: "Logout"
      },
      // Hero Section
      hero: {
        statusBadge: "✨ Live in Puerto Rico",
        headline: "Discover Local",
        headlineAccent: "Magic",
        subtext: "Connect with real places.",
        subtextAccent: "No algorithms, just real people.",
        exploreButton: "🔍 Explore Nearby Experiences",
        scanButton: "📍 Scan to Check In"
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
        title: "The Zutto Loop",
        subtitle: "Simple. Authentic. Meaningful.",
        step1: {
          title: "You find something",
          description: "Discover hidden gems and local experiences that match your vibe"
        },
        step2: {
          title: "You check in",
          description: "Connect with the business and show your support with a simple scan"
        },
        step3: {
          title: "They keep working",
          description: "Help local creators continue doing what they love most"
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
        subtitle: "Join thousands discovering authentic local experiences every day",
        joinButton: "🚀 Join the community",
        businessButton: "💼 Get Discovered Without the Stress"
      }
    }
  },
  es: {
    translation: {
      // Navigation
      nav: {
        explore: "Explorar",
        forBusinesses: "Para Negocios",
        about: "Acerca de",
        signIn: "Iniciar Sesión",
        dashboard: "Panel",
        logout: "Cerrar Sesión"
      },
      // Hero Section
      hero: {
        statusBadge: "✨ En vivo en Puerto Rico",
        headline: "Descubre la",
        headlineAccent: "Magia Local",
        subtext: "Conecta con lugares reales.",
        subtextAccent: "Sin algoritmos, solo personas reales.",
        exploreButton: "🔍 Explorar Experiencias Cercanas",
        scanButton: "📍 Escanear para Registrarse"
      },
      // Experience Categories
      categories: {
        music: {
          title: "Música en Vivo Esta Noche",
          description: "3 lugares cerca de ti"
        },
        coffee: {
          title: "Cafeterías Acogedoras",
          description: "Perfectas para trabajar"
        },
        art: {
          title: "Estudios de Arte Locales",
          description: "Apoya a los creadores"
        }
      },
      // How it Works
      howItWorks: {
        title: "El Ciclo Zutto",
        subtitle: "Simple. Auténtico. Significativo.",
        step1: {
          title: "Encuentras algo",
          description: "Descubre joyas ocultas y experiencias locales que coincidan con tu vibra"
        },
        step2: {
          title: "Te registras",
          description: "Conecta con el negocio y muestra tu apoyo con un simple escaneo"
        },
        step3: {
          title: "Ellos siguen trabajando",
          description: "Ayuda a los creadores locales a continuar haciendo lo que más aman"
        }
      },
      // Live Activity
      liveActivity: {
        badge: "En Vivo Ahora",
        title: "Vivo Ahora",
        subtitle: "Actividad real sucediendo en tu comunidad",
        checkedIn: "personas se acaban de registrar",
        featured: "Destacado hoy",
        newAddition: "Nueva adición",
        trending: "Tendencia"
      },
      // Browse by Mood
      mood: {
        title: "Quiero...",
        subtitle: "Encontrar experiencias que coincidan con tu estado de ánimo",
        music: {
          title: "Escuchar música en vivo",
          description: "Encuentra lugares con presentaciones en vivo"
        },
        cafe: {
          title: "Encontrar una cafetería tranquila",
          description: "Lugares perfectos para trabajar o leer"
        },
        relax: {
          title: "Relajarme y descansar",
          description: "Espacios pacíficos para desconectar"
        },
        shopping: {
          title: "Apoyar a un creador local",
          description: "Descubre tesoros hechos a mano"
        }
      },
      // Testimonials
      testimonials: {
        title: "Por Qué la Gente Ama Zutto",
        subtitle: "Historias reales de nuestra comunidad",
        maria: {
          text: "¡Finalmente encontré mi cafetería favorita a través de Zutto! El dueño recordó mi orden después de solo dos visitas. Esto es lo que se siente la comunidad.",
          name: "María Santos",
          role: "Exploradora Local"
        },
        carlos: {
          text: "Zutto trajo muchas caras nuevas a nuestro estudio. La gente realmente se preocupa por lo que estamos creando aquí. No es solo tráfico peatonal—es conexión.",
          name: "Carlos Rivera",
          role: "Dueño de Estudio de Cerámica"
        },
        ana: {
          text: "Como músico, Zutto me ayuda a conectar con personas que realmente aprecian la música en vivo. Cada show se siente más íntimo y significativo.",
          name: "Ana Delgado",
          role: "Músico Local"
        }
      },
      // Final CTA
      finalCta: {
        title: "¿Listo para Conectar?",
        subtitle: "Únete a miles descubriendo experiencias locales auténticas cada día",
        joinButton: "🚀 Únete a la comunidad",
        businessButton: "💼 Sé Descubierto Sin el Estrés"
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