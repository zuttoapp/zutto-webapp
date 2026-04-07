import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks/use-theme';

export default function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? t('theme.switchToLight') : t('theme.switchToDark')}
      aria-pressed={isDark}
      className="relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors"
      style={{
        backgroundColor: 'var(--zutto-bg-alt)',
        border: '1px solid var(--zutto-border)',
        color: 'var(--zutto-text-muted)',
      }}
      title={isDark ? t('theme.switchToLight') : t('theme.switchToDark')}
    >
      {isDark ? (
        /* Sun icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ color: 'var(--zutto-amber)' }}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        /* Moon icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ color: 'var(--zutto-text-muted)' }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
