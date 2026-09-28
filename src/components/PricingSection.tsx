import React from 'react';
import { Check, ArrowRight, Clock } from 'lucide-react';
import { PRICING_PLANS, BRANCHES_DATA } from '../utils/data';
import { GymBranch, PricingPlan } from '../types';

interface PricingProps {
  currentBranch: GymBranch;
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingProps> = ({ currentBranch, onSelectPlan }) => {
  const activeBranch = BRANCHES_DATA[currentBranch];

  return (
    <section id="pricing" className="py-12 sm:py-20 bg-[#0B0A09] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#FFA303] uppercase tracking-widest">
            <span>Абонементи клубу</span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-400 font-normal">{activeBranch.city}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white font-display uppercase tracking-tight text-balance">
            Обирай зручний графік у зручному форматі
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Абонементи діють у залі {activeBranch.name} ({activeBranch.address}). Без прихованих доплат:
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#1A1814] to-[#100F0D] border-2 border-[#FFA303] shadow-[0_0_35px_rgba(255,163,3,0.15)] ring-1 ring-[#FFA303]/30'
                  : 'bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#FFA303]/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6 bg-[#FFA303] text-black text-[10px] font-black uppercase tracking-widest px-3 py-0.5 rounded-md shadow-md">
                  Вибір більшості
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-bold text-[#FFA303] uppercase tracking-wider">
                    {plan.duration}
                  </span>
                  {plan.timeLimit && (
                    <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#FFA303]" />
                      <span>{plan.timeLimit}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight mb-3">
                  {plan.name}
                </h3>

                {/* Price display with tabular nums */}
                <div className="flex items-baseline gap-1.5 mb-6 pb-4 border-b border-white/[0.08]">
                  <span className="text-3xl sm:text-4xl font-black text-white font-display tabular-nums">
                    {plan.price}
                  </span>
                  <span className="text-sm font-bold text-[#FFA303]">грн</span>
                  {plan.duration.includes('місяц') && (
                    <span className="text-xs text-neutral-400 ml-1">/ період</span>
                  )}
                </div>

                {/* Features list */}
                <div className="space-y-2.5 mb-8">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <div className="w-4 h-4 rounded-full bg-[#FFA303]/10 text-[#FFA303] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlan(plan)}
                className={`w-full h-12 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all tap-target cursor-pointer active:scale-[0.98] ${
                  plan.popular
                    ? 'bg-[#FFA303] hover:bg-[#FFB326] text-black shadow-md shadow-[#FFA303]/20'
                    : 'bg-white/[0.06] hover:bg-[#FFA303] hover:text-black text-white border border-white/10 hover:border-[#FFA303]'
                }`}
              >
                <span>Оформити абонемент</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Free first session reminder note */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-[#FFA303]/30 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="text-xs sm:text-sm text-neutral-200">
            <span className="text-[#FFA303] font-bold">Сумніваєтесь?</span> Завітайте на перше пробне заняття абсолютно безкоштовно!
          </div>
          <button
            onClick={() => onSelectPlan(PRICING_PLANS[0])}
            className="px-5 py-2.5 bg-[#FFA303] hover:bg-[#FFB326] active:scale-95 text-black font-extrabold text-xs rounded-xl tap-target whitespace-nowrap shadow-xs cursor-pointer"
          >
            Спробувати 0 грн
          </button>
        </div>

      </div>
    </section>
  );
};
