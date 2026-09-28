import React from 'react';
import { Sparkles, Dumbbell, Zap, Flame } from 'lucide-react';
import { GymBranch } from '../types';
import { BRANCHES_DATA } from '../utils/data';

interface AthleticTickerProps {
  currentBranch: GymBranch;
}

export const AthleticTicker: React.FC<AthleticTickerProps> = ({ currentBranch }) => {
  const activeBranch = BRANCHES_DATA[currentBranch];

  const items = [
    `3:16 GYM ${activeBranch.city.toUpperCase()}`,
    'ПРОФЕСІЙНІ ТРЕНАЖЕРИ',
    'ЗОНА ВІЛЬНИХ ВАГ ДО 50 КГ',
    'ПЕРШЕ ТРЕНУВАННЯ 0 ГРН',
    'ПОТУЖНА КАРДІО-ЛІНІЯ',
    'ДИПЛОМОВАНІ ТРЕНЕРИ',
    'ФІТНЕС-БАР & ПРОТЕЇН',
    'ПРАЦЮЄМО З 07:00 ДО 22:00',
  ];

  return (
    <div className="relative overflow-hidden py-3 bg-[#12110E] border-y border-[#FFA303]/20 select-none">
      <div className="flex w-max animate-marquee space-x-8 items-center">
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex items-center space-x-3 text-xs sm:text-sm font-black font-display tracking-widest uppercase">
            <span className="text-white hover:text-[#FFA303] transition-colors">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFA303] shrink-0"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
