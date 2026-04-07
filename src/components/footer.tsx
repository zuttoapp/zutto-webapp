import React from 'react';
import { useTranslation } from 'react-i18next';
import { SupportedByLogos } from '@/components/supported-by-logos';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: 'var(--zutto-bg-alt)',
        borderTop: '1px solid var(--zutto-border)',
        color: 'var(--zutto-text)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Supported by logos */}
          <div className="flex w-full flex-col items-center gap-4">
            <p
              className="text-center text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--zutto-text-muted)' }}
            >
              {t('supportedBy.label')}
            </p>
            <SupportedByLogos variant="footer" />
          </div>

          {/* Divider + copyright */}
          <div
            className="w-full pt-6 sm:pt-8"
            style={{ borderTop: '1px solid var(--zutto-border)' }}
          >
            <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
              <p className="text-sm" style={{ color: 'var(--zutto-text)' }}>
                {t('footer.copyright', { year })}
              </p>
              <p className="text-sm" style={{ color: 'var(--zutto-text-muted)' }}>
                {t('footer.location')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
