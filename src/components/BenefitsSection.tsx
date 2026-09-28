import React from 'react';
import { Dumbbell, Users, Wind, Coffee, Check } from 'lucide-react';
import { GymBranch } from '../types';
import { BRANCHES_DATA } from '../utils/data';

interface BenefitsProps {
  currentBranch: GymBranch;
}

export const BenefitsSection: React.FC<BenefitsProps> = ({ currentBranch }) => {
  const activeBranch = BRANCHES_DATA[currentBranch];

  return (
    <section className="py-14 sm:py-24 bg-[#0B0A09] border-b border-white/[0.08] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#FFA303]/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2.5 max-w-2xl">
            <div className="text-xs font-mono font-bold text-[#FFA303] uppercase tracking-[0.25em]">
              ПЕРЕВАГИ КЛУБУ · 3:16
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase tracking-tight text-balance leading-none">
              Інженерія твоєї сили у {activeBranch.city}
            </h2>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
            Простір, де кожен метр працює на твій прогрес. Від потужної вентиляції до олімпійських грифів — без зайвих компромісів.
          </div>
        </div>

        {/* Responsive Bento Grid (Anti-grid) */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 01: Hero Bento Card (Col-span 12 on mobile, 7 on lg) */}
          <div className="col-span-12 lg:col-span-7 bg-[#141311] border border-white/10 hover:border-[#FFA303]/50 rounded-3xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 group shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFA303]/[0.05] rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-neutral-400 tracking-wider">
                  01 / ПРОСТІР ТА ОБЛАДНАННЯ
                </span>
                <span className="text-xs font-mono font-bold text-[#FFA303] px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                  {activeBranch.area}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight mb-3">
                50+ професійних станцій без черг
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl font-normal">
                Ергономічне планування силових рам, повний гантельний ряд до 50 кг з кроком 2 кг та окрема кардіо-лінія з видом на зал.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-display tabular-nums">
                  50<span className="text-[#FFA303] text-sm">+</span>
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Силових снарядів</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-display tabular-nums">
                  1-50<span className="text-[#FFA303] text-xs">кг</span>
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Гантельний ряд</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-display tabular-nums">
                  {activeBranch.area.replace(' ', '')}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">Сучасний простір</div>
              </div>
            </div>
          </div>

          {/* Card 02: Air & Microclimate (Col-span 12 on mobile, 5 on lg) */}
          <div className="col-span-12 lg:col-span-5 bg-[#141311] border border-white/10 hover:border-[#FFA303]/50 rounded-3xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 group shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-neutral-400 tracking-wider">
                  02 / МІКРОКЛІМАТ
                </span>
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FFA303]">
                  <Wind className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight mb-2.5">
                Потужний повітрообмін 24/7
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Припливно-витяжна вентиляція з триступеневою фільтрацією та кондиціонуванням підтримує 19–21°C навіть у години пік.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center gap-2 text-xs text-[#FFA303] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#FFA303] animate-pulse"></span>
              <span>100% свіже повітря без задухи</span>
            </div>
          </div>

          {/* Card 03: Coaching Guidance */}
          <div className="col-span-12 lg:col-span-5 bg-[#141311] border border-white/10 hover:border-[#FFA303]/50 rounded-3xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 group shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-neutral-400 tracking-wider">
                  03 / НАСТАВНИЦТВО
                </span>
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FFA303]">
                  <Users className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight mb-2.5">
                Дипломований штаб тренерів
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Майстри спорту та реабілітологи ставлять безпечну біомеханіку, страхують та ведуть до реального фізичного результату.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center gap-2 text-xs text-neutral-300">
              <Check className="w-4 h-4 text-[#FFA303] shrink-0" />
              <span>Вступний інструктаж входить у перше тренування (0 грн)</span>
            </div>
          </div>

          {/* Card 04: Recovery & Nutrition */}
          <div className="col-span-12 lg:col-span-7 bg-[#141311] border border-white/10 hover:border-[#FFA303]/50 rounded-3xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 group shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-neutral-400 tracking-wider">
                  04 / ВІДНОВЛЕННЯ & БАР
                </span>
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FFA303]">
                  <Coffee className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight mb-2.5">
                Фітнес-бар та роздягальні клубного рівня
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
                Свіжозварена зернова кава, сироватковий протеїн, ізотоніки, індивідуальні шафки та теплий душ після кожного тренування.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FFA303]" /> Протеїн & BCAA</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FFA303]" /> Зернова кава</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FFA303]" /> Теплий душ</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FFA303]" /> Персональні шафки</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
