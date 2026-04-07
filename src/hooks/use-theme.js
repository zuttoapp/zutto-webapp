import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'zutto-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      return next;
    });
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === STORAGE_KEY && (e.newValue === 'light' || e.newValue === 'dark')) {
        setTheme(e.newValue);
        document.documentElement.setAttribute('data-theme', e.newValue);
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  return { theme, toggle };
}
