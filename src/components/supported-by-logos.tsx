import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import fase1LogoUrl from '@/assets/fase-1-program.svg';
import trustLogoUrl from '@/assets/pr-science-trust.svg';

const FASE_1_PROGRAM_URL = 'https://fase1.org/';
const SCIENCE_TRUST_URL = 'https://prsciencetrust.org/';

const linkClassName =
  'inline-flex w-full max-w-full justify-center rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-zutto-primary focus-visible:ring-offset-2';

type SupportedByLogosProps = {
  variant?: 'section' | 'footer';
};

/** Wraps partner SVGs: in dark mode uses a light plate so full-color marks stay readable. */
function LogoPlate({ children, paddingClass }: { children: ReactNode; paddingClass: string }) {
  return (
    <div
      className={`flex w-full max-w-full items-center justify-center rounded-xl ${paddingClass}`}
      style={{
        backgroundColor: 'var(--zutto-logo-plate-bg)',
        border: 'var(--zutto-logo-plate-border)',
        boxShadow: 'var(--zutto-logo-plate-shadow)',
      }}
    >
      {children}
    </div>
  );
}

export function SupportedByLogos({ variant = 'section' }: SupportedByLogosProps) {
  const { t } = useTranslation();
  const isFooter = variant === 'footer';

  const blockTitleClass = isFooter
    ? 'text-xs text-zutto-muted font-medium font-nunito uppercase tracking-wide'
    : 'text-xs font-medium uppercase tracking-widest text-zutto-muted';

  const faseSize = isFooter ? 'h-10 sm:h-11' : 'h-16 sm:h-20';
  const trustSize = isFooter ? 'h-10 sm:h-11' : 'h-14 sm:h-16';
  const platePadding = isFooter ? 'p-3 sm:p-4' : 'p-5 sm:p-6';

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center gap-10 ${isFooter ? 'md:gap-12' : 'md:gap-16 lg:gap-20'}`}
    >
      <div className="flex w-full flex-col items-center gap-3 sm:max-w-md">
        <p className={blockTitleClass}>{t('supportedBy.fase1Title')}</p>
        <a
          href={FASE_1_PROGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClassName} transition-transform hover:scale-[1.02]`}
        >
          <LogoPlate paddingClass={platePadding}>
            <img
              src={fase1LogoUrl}
              alt={t('supportedBy.fase1LogoAlt')}
              className={`${faseSize} w-auto max-w-full object-contain object-center`}
              width={400}
              height={170}
            />
          </LogoPlate>
        </a>
        {!isFooter ? (
          <p className="text-xs sm:text-sm text-zutto-muted font-nunito text-center font-medium">
            {t('supportedBy.fase1ProgramLine')}
          </p>
        ) : null}
      </div>

      <div
        className="md:hidden w-full max-w-xs h-px shrink-0"
        style={{
          background: 'linear-gradient(to right, transparent, var(--zutto-border), transparent)',
        }}
        aria-hidden
      />

      <div
        className="hidden md:block w-px self-stretch min-h-[7rem] shrink-0"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--zutto-border), transparent)',
        }}
        aria-hidden
      />

      <div className="flex w-full flex-col items-center gap-3 sm:max-w-md">
        <p className={blockTitleClass}>{t('supportedBy.trustTitle')}</p>
        <a
          href={SCIENCE_TRUST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClassName} transition-transform hover:scale-[1.02]`}
        >
          <LogoPlate paddingClass={platePadding}>
            <img
              src={trustLogoUrl}
              alt={t('supportedBy.trustLogoAlt')}
              className={`${trustSize} w-auto max-w-full object-contain object-center`}
              width={245}
              height={92}
            />
          </LogoPlate>
        </a>
      </div>
    </div>
  );
}
