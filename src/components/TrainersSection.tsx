import React, { useState } from 'react';
import { ArrowRight, Check, Star, ShieldCheck, Instagram, Award, Sparkles, X, ChevronRight } from 'lucide-react';
import { TRAINERS_DATA, BRANCHES_DATA } from '../utils/data';
import { GymBranch, Trainer } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface TrainersProps {
  currentBranch: GymBranch;
  onSelectTrainer: (trainer: Trainer) => void;
}

export const TrainersSection: React.FC<TrainersProps> = ({
  currentBranch,
  onSelectTrainer,
}) => {
  const [selectedTrainerModal, setSelectedTrainerModal] = useState<Trainer | null>(null);
  const activeBranch = BRANCHES_DATA[currentBranch];

  // Exclusively show trainers for this branch
  const branchTrainers = TRAINERS_DATA.filter(
    (t) => t.branch === currentBranch || t.branch === 'both'
  );

  return (
    <section id="trainers" className="py-14 sm:py-24 bg-[#0E0D0B] border-b border-white/[0.08] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#FFA303]/[0.05] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FFA303] uppercase tracking-widest bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/10">
            <Award className="w-3.5 h-3.5 text-[#FFA303]" />
            <span>Тренерський склад · {activeBranch.city}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase tracking-tight text-balance">
            Твої наставники у залі {activeBranch.name}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Дипломовані експерти силового тренінгу, реабілітації та дієтології. Індивідуальний контроль кожного руху:
          </p>
        </div>

        {/* Trainers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {branchTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-[#141311] hover:bg-[#181613] border border-white/10 hover:border-[#FFA303]/50 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_12px_40px_rgba(255,163,3,0.12)] relative"
            >
              <div>
                {/* Trainer Photo Showcase */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-neutral-900">
                  <ImageWithFallback
                    src={trainer.imageUrl}
                    alt={trainer.name}
                    fallbackTitle={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-[#141311]/20 to-black/30"></div>

                  {/* Top floating metadata */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1 text-xs font-bold text-black bg-[#FFA303] px-2.5 py-1 rounded-lg shadow-md font-mono">
                      <Star className="w-3.5 h-3.5 fill-black stroke-black" />
                      <span>{trainer.rating || 5.0}</span>
                    </div>

                    <span className="text-[11px] font-mono text-neutral-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15">
                      {trainer.experience}
                    </span>
                  </div>

                  {/* Bottom Coach Tag inside photo */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <span className="text-[11px] font-bold text-[#FFA303] uppercase tracking-wider block font-mono">
                      {trainer.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight">
                      {trainer.name}
                    </h3>
                  </div>
                </div>

                {/* Info body */}
                <div className="p-5 sm:p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {trainer.specialization}
                  </p>

                  {/* Stats / Clients count indicator */}
                  <div className="flex items-center justify-between text-xs py-2.5 px-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-neutral-400">Підопічних клієнтів:</span>
                    <span className="font-mono font-bold text-[#FFA303]">{trainer.clientsCount || 80}+ атлетів</span>
                  </div>

                  {/* Achievements with gold checkmarks */}
                  <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                    {trainer.achievements.slice(0, 2).map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#FFA303] shrink-0 mt-0.5" />
                        <span className="leading-snug">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 sm:p-6 pt-0 space-y-2">
                <button
                  onClick={() => onSelectTrainer(trainer)}
                  className="w-full h-12 rounded-xl bg-[#FFA303] hover:bg-[#FFB326] active:scale-[0.98] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#FFA303]/20 transition-all cursor-pointer"
                >
                  <span>Записатись до {trainer.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedTrainerModal(trainer)}
                  className="w-full py-2 text-center text-xs font-bold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Переглянути всі сертифікати & деталі
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-neutral-400 bg-white/[0.03] px-4 py-2 rounded-full border border-white/10">
            <ShieldCheck className="w-4 h-4 text-[#FFA303]" />
            <span>Вступний інструктаж чергового тренера входить у будь-яке перше відвідування за 0 грн</span>
          </div>
        </div>

      </div>

      {/* Coach Detail Modal */}
      {selectedTrainerModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedTrainerModal(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#12110F] border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTrainerModal(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:text-[#FFA303] border border-white/20 z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 w-full">
              <ImageWithFallback
                src={selectedTrainerModal.imageUrl}
                alt={selectedTrainerModal.name}
                className="w-full h-full object-cover object-top"
                fallbackTitle={selectedTrainerModal.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12110F] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <span className="text-xs text-[#FFA303] font-mono font-bold uppercase">{selectedTrainerModal.role}</span>
                <h3 className="text-2xl font-black text-white font-display uppercase">{selectedTrainerModal.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-xs text-neutral-300 pb-3 border-b border-white/10">
                <span className="font-mono text-[#FFA303] font-bold">{selectedTrainerModal.experience}</span>
                <span>{selectedTrainerModal.clientsCount}+ задоволених клієнтів</span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                  Спеціалізація та профіль:
                </h4>
                <p className="text-sm text-neutral-200 leading-relaxed">
                  {selectedTrainerModal.specialization}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Досягнення та кваліфікація:
                </h4>
                <div className="space-y-2">
                  {selectedTrainerModal.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#FFA303] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => {
                    const t = selectedTrainerModal;
                    setSelectedTrainerModal(null);
                    onSelectTrainer(t);
                  }}
                  className="w-full h-12 rounded-xl bg-[#FFA303] hover:bg-[#FFB326] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shadow-md shadow-[#FFA303]/25"
                >
                  <span>Записатись на індивідуальне тренування</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
