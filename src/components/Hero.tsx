import React from 'react';
import { ArrowRight, MapPin, Dumbbell, ShieldCheck, Check, ChevronRight, Clock, Sparkles } from 'lucide-react';
import { GymBranch } from '../types';
import { BRANCHES_DATA } from '../utils/data';
import { Logo } from './Logo';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  currentBranch: GymBranch;
  onOpenBranchModal: () => void;
  onOpenBooking: () => void;
  onScrollToPricing: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentBranch,
  onOpenBranchModal,
  onOpenBooking,
  onScrollToPricing,
}) => {
  const activeBranch = BRANCHES_DATA[currentBranch];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-16 sm:pb-28 bg-[#0B0A09] border-b border-white/[0.08]">
      {/* Background ambient lighting and volumetric gold ray */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-[#FFA303]/[0.07] rounded-full blur-[150px] pointer-events-none -z-0"></div>
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-[#FFA303]/[0.04] rounded-full blur-[120px] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unboxed Minimalist Kicker & Live Status */}
        <div className="mb-6 flex flex-wrap items-center gap-2.5 text-xs text-neutral-400 font-mono">
          <span className="flex items-center gap-1.5 text-[#FFA303] font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FFA303] animate-pulse"></span>
            3:16 ATHLETIC CLUB
          </span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-200">{activeBranch.city}</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-400">{activeBranch.area} простору</span>
          <span className="text-neutral-600 hidden sm:inline">/</span>
          <span className="text-emerald-400 hidden sm:inline">Працюємо сьогодні до 22:00</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Left Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-display leading-[0.98] uppercase text-balance">
              Формуй силу. <br />
              Створюй себе <br />
              <span className="text-[#FFA303] relative inline-block">
                разом із 3:16
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#FFA303]/40 rounded-full"></span>
              </span>
            </h1>

            {/* Editorial Concise Subtitle */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl font-normal">
              Безкомпромісний простір сили та здоров'я у {activeBranch.city}. 50+ професійних силових станцій, вільні ваги до 50 кг, вентиляція з контролем мікроклімату та сертифіковані наставники.
            </p>

            {/* Active Branch Display Banner */}
            <div className="p-4 rounded-2xl bg-[#141311] border border-white/10 hover:border-[#FFA303]/40 transition-all flex items-center justify-between gap-3 shadow-xl">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-[#FFA303]/10 border border-[#FFA303]/30 text-[#FFA303] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-white flex items-center gap-2 truncate">
                    <span className="truncate">{activeBranch.name}</span>
                    <span className="text-xs text-[#FFA303] font-mono shrink-0">({activeBranch.area})</span>
                  </div>
                  <div className="text-xs text-neutral-400 truncate mt-0.5">{activeBranch.address}</div>
                </div>
              </div>

              {/* Change City Button */}
              <button
                type="button"
                onClick={onOpenBranchModal}
                className="py-2.5 px-3.5 rounded-xl text-xs font-bold text-neutral-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#FFA303]/50 transition-all tap-target flex items-center gap-1 shrink-0 cursor-pointer active:scale-95"
              >
                <span>Змінити</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#FFA303]" />
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                onClick={onOpenBooking}
                className="shimmer-effect w-full sm:w-auto h-13 px-8 rounded-xl bg-[#FFA303] hover:bg-[#FFB326] active:scale-[0.98] text-black font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-[#FFA303]/25 transition-all tap-target-lg cursor-pointer"
              >
                <span>Записатись на безкоштовне тренування</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                onClick={onScrollToPricing}
                className="w-full sm:w-auto h-13 px-7 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all tap-target-lg cursor-pointer"
              >
                <span>Тарифи та абонементи</span>
              </button>
            </div>

            {/* Quantitative Proof Numbers */}
            <div className="pt-5 border-t border-white/[0.08] grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-display tabular-nums">
                  {activeBranch.area.replace(' ', '')}
                </div>
                <div className="text-xs text-neutral-400 font-normal mt-0.5">
                  Сучасний простір
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-display tabular-nums">
                  50<span className="text-[#FFA303] text-lg">+</span>
                </div>
                <div className="text-xs text-neutral-400 font-normal mt-0.5">
                  Тренажерів у залі
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-display tabular-nums">
                  0<span className="text-[#FFA303] text-lg">грн</span>
                </div>
                <div className="text-xs text-neutral-400 font-normal mt-0.5">
                  Перше тренування
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Visual Showcase with Club Interior Photo & VIP Pass */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-md bg-gradient-to-b from-[#181613] to-[#0E0D0B] p-5 sm:p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
              
              {/* Photo Banner of Current Gym Interior */}
              <div className="relative h-52 sm:h-56 w-full rounded-2xl overflow-hidden mb-4 border border-white/10 group-hover:border-[#FFA303]/40 transition-colors">
                <ImageWithFallback
                  src={activeBranch.imageUrl || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'}
                  alt={activeBranch.name}
                  fallbackTitle={activeBranch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-black/25 to-black/20"></div>

                {/* Floating pill over image */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 text-[11px] font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Зал відкрито</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-white uppercase tracking-wider font-display">
                    {activeBranch.name}
                  </span>
                  <span className="font-mono text-[#FFA303] font-bold text-[11px] bg-black/70 px-2 py-0.5 rounded">
                    {activeBranch.area}
                  </span>
                </div>
              </div>

              {/* Header inside card */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] relative z-10">
                <Logo size="sm" />
                <div className="flex items-center gap-1 text-xs text-[#FFA303] font-semibold bg-[#FFA303]/10 px-2.5 py-1 rounded-lg border border-[#FFA303]/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span>До 22:00</span>
                </div>
              </div>

              {/* VIP Club Pass Element */}
              <div className="my-4 p-4 rounded-2xl bg-gradient-to-br from-[#24211D] to-[#151412] border border-[#FFA303]/30 shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-start mb-2.5">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#FFA303] font-mono">
                      Клубний абонемент · {activeBranch.city}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white font-sans uppercase tracking-wide mt-0.5">
                      3:16 ALL-ACCESS PASS
                    </h3>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#FFA303]" />
                </div>

                <div className="space-y-1.5 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#FFA303] shrink-0" />
                    <span>Повний доступ до всіх зон залу ({activeBranch.area})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#FFA303] shrink-0" />
                    <span>Вступний інструктаж чергового тренера</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#FFA303] shrink-0" />
                    <span>Індивідуальна шафка та гарячий душ</span>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-mono text-[11px] truncate max-w-[170px]">{activeBranch.address}</span>
                  <span className="text-[#FFA303] font-bold">0 грн перше</span>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="relative z-10">
                <button
                  onClick={onOpenBooking}
                  className="w-full h-12 rounded-xl bg-[#FFA303] hover:bg-[#FFB326] active:scale-[0.98] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#FFA303]/20 transition-all cursor-pointer"
                >
                  <Dumbbell className="w-4 h-4" />
                  <span>Забронювати безкоштовний візит</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
