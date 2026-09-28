import React from 'react';
import { Phone, Instagram, Dumbbell, Sparkles } from 'lucide-react';
import { GymBranch } from '../types';
import { BRANCHES_DATA } from '../utils/data';

interface MobileQuickBarProps {
  currentBranch: GymBranch;
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  currentBranch,
  onOpenBooking,
}) => {
  const activeBranch = BRANCHES_DATA[currentBranch];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0E0D0B]/95 backdrop-blur-xl border-t border-white/10 px-3 pt-2 pb-[calc(env(safe-area-inset-bottom,0px)+10px)] shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-md mx-auto grid grid-cols-12 gap-2 items-center">
        {/* Quick Phone Call */}
        <a
          href={`tel:${activeBranch.phone.replace(/[^0-9+]/g, '')}`}
          className="col-span-3 h-12 rounded-xl bg-white/[0.05] active:bg-[#FFA303] active:text-black text-white flex flex-col items-center justify-center text-[10px] font-bold tap-target transition-all border border-white/10 active:scale-95"
          title="Зателефонувати у зал"
        >
          <Phone className="w-4 h-4 text-[#FFA303] mb-0.5 active:text-black" />
          <span>Дзвінок</span>
        </a>

        {/* Quick Instagram */}
        <a
          href={activeBranch.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 h-12 rounded-xl bg-white/[0.05] active:bg-[#FFA303] active:text-black text-white flex flex-col items-center justify-center text-[10px] font-bold tap-target transition-all border border-white/10 active:scale-95"
          title="Наш Instagram"
        >
          <Instagram className="w-4 h-4 text-[#FFA303] mb-0.5 active:text-black" />
          <span>Insta</span>
        </a>

        {/* Primary CTA Button (Free workout 0 грн) with shimmer effect */}
        <button
          onClick={onOpenBooking}
          className="shimmer-effect col-span-6 h-12 rounded-xl bg-[#FFA303] hover:bg-[#ffb326] active:scale-[0.96] text-black flex items-center justify-center gap-1.5 text-xs font-black uppercase tracking-wider shadow-lg shadow-[#FFA303]/30 tap-target transition-all cursor-pointer relative overflow-hidden"
        >
          <Dumbbell className="w-4 h-4 animate-bounce" />
          <span>Пробне 0 грн</span>
          <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping absolute top-2 right-2"></span>
        </button>
      </div>
    </div>
  );
};
