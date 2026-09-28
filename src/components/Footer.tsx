import React from 'react';
import { Instagram, Phone, MapPin, Dumbbell, RefreshCw } from 'lucide-react';
import { BRANCHES_DATA } from '../utils/data';
import { GymBranch } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  currentBranch: GymBranch;
  onOpenBooking: () => void;
  onOpenBranchModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentBranch,
  onOpenBooking,
  onOpenBranchModal,
}) => {
  const activeBranch = BRANCHES_DATA[currentBranch];

  return (
    <footer className="bg-[#0D0C0B] text-slate-400 py-12 sm:py-16 border-t border-[#222121] pb-24 lg:pb-16 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Athletic Graphic Callout matching 3.jpg */}
        <div className="bg-[#1B1A17] border border-[#2A2826] rounded-3xl p-6 sm:p-10 mb-12 text-center space-y-4">
          <div className="flex justify-center">
            <Logo size="lg" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-white uppercase tracking-tight">
            Чекаємо на тебе у 3:16 {activeBranch.city}!
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Почни шлях до сильного та рельєфного тіла вже сьогодні. Перше тренування у нашому клубі за адресою {activeBranch.address} — абсолютно безкоштовне.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-[#FFA303] hover:bg-[#ffb326] text-black font-black text-xs uppercase tracking-wider transition-all tap-target shadow-md shadow-[#FFA303]/20 cursor-pointer active:scale-95"
            >
              Записатись на безкоштовне тренування
            </button>
            <a
              href={`tel:${activeBranch.phone.replace(/[^0-9+]/g, '')}`}
              className="px-6 py-3.5 rounded-xl bg-[#222121] hover:bg-[#2A2826] text-white font-bold text-xs border border-[#2A2826] transition-colors tap-target flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFA303]" />
              <span>Дзвінок на рецепцію ({activeBranch.city})</span>
            </a>
          </div>
        </div>

        {/* Exclusive Branch Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#222121] items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <Logo size="sm" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Мережа спортивних клубів 3:16 GYM. Професійні тренажери, зона вільних ваг, сертифіковані тренери та якісний фітнес-бар.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenBranchModal}
                className="text-xs text-[#FFA303] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Змінити поточний філіал</span>
              </button>
            </div>
          </div>

          {/* Exclusive Active Branch Details */}
          <div className="md:col-span-7 space-y-3 bg-[#141311] p-5 rounded-2xl border border-[#2A2826]">
            <div className="flex items-center justify-between">
              <div className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FFA303]" />
                <span>Контакти клубу: {activeBranch.name}</span>
              </div>
              <span className="text-[11px] font-mono text-[#FFA303]">{activeBranch.area}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-slate-400">Адреса:</div>
                <div className="text-white font-medium">{activeBranch.address}, {activeBranch.city}</div>
              </div>
              <div>
                <div className="text-slate-400">Графік:</div>
                <div className="text-white">{activeBranch.workHoursWeekday}</div>
              </div>
              <div>
                <div className="text-slate-400">Телефон:</div>
                <a href={`tel:${activeBranch.phone}`} className="text-white hover:text-[#FFA303] font-mono font-bold">
                  {activeBranch.phone}
                </a>
              </div>
              <div>
                <div className="text-slate-400">Instagram:</div>
                <a
                  href={activeBranch.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFA303] hover:underline font-bold inline-flex items-center gap-1"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{activeBranch.instagram}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Спортивний клуб 3:16 GYM ({activeBranch.city}). Всі права захищено.
          </div>
          <div className="flex items-center gap-3">
            <a href={activeBranch.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
              <Instagram className="w-3 h-3 text-[#FFA303]" />
              <span>{activeBranch.instagram}</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
