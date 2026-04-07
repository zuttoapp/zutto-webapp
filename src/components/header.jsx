import { Link } from 'react-router-dom';
import LanguageToggle from '@/components/language-toggle';
import ThemeToggle from '@/components/theme-toggle';
import ZuttoLogo from '@/assets/zuttoapp-1000x1000-1.svg';

function Header() {
  return (
    <nav
      className="fixed w-full top-0 z-50 backdrop-blur-xl"
      style={{
        backgroundColor: 'rgba(var(--zutto-primary-rgb, 255,255,255), 0)',
        // Actual surface is card at 85% opacity:
        background: 'color-mix(in srgb, var(--zutto-card) 85%, transparent)',
        borderBottom: '1px solid var(--zutto-border)',
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-4 justify-between items-center">
        <Link to="/" className="flex items-center shrink-0" aria-label="Zutto home">
          <img
            src={ZuttoLogo}
            alt="Zutto"
            className="h-8 w-auto max-w-[12rem] object-contain object-left"
            decoding="async"
          />
        </Link>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Header;
