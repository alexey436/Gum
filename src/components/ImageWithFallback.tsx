import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackIcon?: React.ReactNode;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  fallbackIcon,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-[#1C1A17] via-[#12110F] to-[#0A0A09] border border-white/10 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden select-none ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#FFA303_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
        <div className="w-12 h-12 rounded-2xl bg-[#FFA303]/10 border border-[#FFA303]/30 flex items-center justify-center text-[#FFA303] mb-2 shadow-inner">
          {fallbackIcon || <Dumbbell className="w-6 h-6" />}
        </div>
        <span className="text-xs font-bold text-neutral-200 uppercase tracking-wider font-display">
          {fallbackTitle || alt || '3:16 GYM'}
        </span>
        <span className="text-[10px] text-[#FFA303] font-mono mt-0.5">3:16 ATHLETIC CLUB</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#161513] animate-pulse flex items-center justify-center">
          <Dumbbell className="w-6 h-6 text-white/20 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
