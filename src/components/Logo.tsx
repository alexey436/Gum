import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  // Dimensions for the icon mark
  const iconSizes = {
    sm: { w: 22, h: 32, textNum: 'text-base', textGym: 'text-xs tracking-[0.16em]' },
    md: { w: 26, h: 38, textNum: 'text-xl', textGym: 'text-sm tracking-[0.18em]' },
    lg: { w: 34, h: 48, textNum: 'text-2xl sm:text-3xl', textGym: 'text-base sm:text-lg tracking-[0.2em]' },
  };

  const currentSize = iconSizes[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* 3:16 Orange Radiant Starburst / Vertical Spine Mark */}
      <svg
        width={currentSize.w}
        height={currentSize.h}
        viewBox="0 0 28 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        {/* Right vertical spine / bar */}
        <rect x="20" y="2" width="5.5" height="38" rx="2.75" fill="#FF7A00" />
        
        {/* Top-left diagonal ray */}
        <line
          x1="20"
          y1="21"
          x2="5"
          y2="9"
          stroke="#FF7A00"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        
        {/* Center horizontal left ray */}
        <line
          x1="20"
          y1="21"
          x2="3"
          y2="21"
          stroke="#FF7A00"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        
        {/* Bottom-left diagonal ray */}
        <line
          x1="20"
          y1="21"
          x2="5"
          y2="33"
          stroke="#FF7A00"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
      </svg>

      {/* 3:16 GYM 2-Line Typographic Lockup */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-black font-sans text-white ${currentSize.textNum} tracking-tight leading-none`}
            style={{ fontFamily: "'Montserrat', 'Manrope', system-ui, sans-serif" }}
          >
            3:16
          </span>
          <span
            className={`font-black font-sans text-white ${currentSize.textGym} leading-none mt-0.5`}
            style={{ fontFamily: "'Montserrat', 'Manrope', system-ui, sans-serif" }}
          >
            GYM
          </span>
        </div>
      )}
    </div>
  );
};
