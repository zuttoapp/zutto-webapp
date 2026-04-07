import React from 'react';

interface ZuttoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const ZuttoButton: React.FC<ZuttoButtonProps> = ({
  children,
  onClick,
  className = '',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-bold shadow-sm transition-colors duration-150 bg-gradient-to-r from-[#FFB347] to-[#FFCC80] text-[#222] hover:from-[#FFA500] hover:to-[#FFD580] focus:outline-none focus:ring-2 focus:ring-[#FFB347] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ZuttoButton;
