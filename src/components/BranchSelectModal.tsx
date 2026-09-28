import React, { useEffect } from 'react';
import { MapPin, Instagram, ArrowRight, Check, X, Clock, Dumbbell, Sparkles, Shield, ChevronRight } from 'lucide-react';
import { GymBranch } from '../types';
import { BRANCHES_DATA } from '../utils/data';
import { Logo } from './Logo';
import { ImageWithFallback } from './ImageWithFallback';

interface BranchSelectModalProps {
  isOpen: boolean;
  currentBranch: GymBranch;
  onSelectBranch: (branch: GymBranch) => void;
  canClose?: boolean;
  onClose?: () => void;
}

export const BranchSelectModal: React.FC<BranchSelectModalProps> = ({
  isOpen,
  currentBranch,
  onSelectBranch,
  canClose = true,
  onClose,
}) => {
  // Handle ESC key to close if canClose is true
  useEffect(() => {
    if (!isOpen || !canClose || !onClose) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, canClose, onClose]);

  if (!isOpen) return null;

  const smila = BRANCHES_DATA.smila;
  const zolo = BRANCHES_DATA.zolo;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="branch-select-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300"
      onClick={(e) => {
        if (canClose && onClose && e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#0D0C0A] text-white rounded-3xl sm:rounded-[36px] shadow-[0_30px_100px_rgba(0,0,0,0.95)] border border-white/10 overflow-hidden my-auto p-5 sm:p-8 lg:p-10">
        
        {/* Top ambient gold light bar */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFA303] to-transparent opacity-80"></div>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#FFA303]/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close button if user already had a branch chosen */}
        {canClose && onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer z-20 group"
            aria-label="Закрити вибір філіалу"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
          </button>
        )}

        {/* Modal Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-10 relative z-10">
          <div className="flex justify-center mb-1">
            <Logo size="lg" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FFA303] text-[11px] font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Мережа фітнес-просторів 3:16 GYM</span>
          </div>

          <h2 id="branch-select-title" className="text-2xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-white text-balance">
            Оберіть вашу локацію
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Всі ціни, розклад тренувань, зона вільних ваг та тренерський склад сайту адаптуються суто під обраний клуб:
          </p>
        </div>

        {/* Two Grand Flagship Branch Portals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 relative z-10">
          
          {/* CARD 1: SMILA */}
          <div
            onClick={() => onSelectBranch('smila')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectBranch('smila');
              }
            }}
            className={`group relative rounded-2xl sm:rounded-[28px] overflow-hidden border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              currentBranch === 'smila'
                ? 'border-[#FFA303] bg-gradient-to-b from-[#1E1C18] to-[#12110F] shadow-[0_0_40px_rgba(255,163,3,0.22)] ring-1 ring-[#FFA303]/60'
                : 'border-white/10 hover:border-[#FFA303]/60 bg-[#141311] hover:bg-[#181714] shadow-xl'
            }`}
          >
            {/* Atmospheric Background Photo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
                alt="3:16 GYM Сміла"
                fallbackTitle="3:16 GYM Сміла"
                className="w-full h-full object-cover object-center opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-[#0D0C0A]/85 to-black/50"></div>
            </div>

            {/* Top Meta Header inside card */}
            <div className="relative z-10 p-5 sm:p-7 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#FFA303] bg-[#FFA303]/10 border border-[#FFA303]/30 px-3 py-1 rounded-full">
                    Локація 01 · Сміла
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {smila.instagram}
                  </span>
                </div>

                {currentBranch === 'smila' ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FFA303] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#FFA303]/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Обрано</span>
                  </span>
                ) : (
                  <span className="text-xs font-mono text-slate-400 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {smila.area}
                  </span>
                )}
              </div>

              {/* Title & Address */}
              <div className="space-y-1.5 pt-1">
                <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white group-hover:text-[#FFA303] transition-colors uppercase">
                  3:16 GYM · Сміла
                </h3>
                
                <div className="flex items-start gap-2 text-sm text-slate-200">
                  <MapPin className="w-4 h-4 text-[#FFA303] shrink-0 mt-0.5" />
                  <span className="font-semibold">{smila.address}</span>
                </div>
              </div>

              {/* Club Spec Highlights */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FFA303] shrink-0" />
                  <span className="font-medium text-white">{smila.workHoursWeekday}</span>
                  <span className="text-slate-400">· Сб/Нд до 20:00</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA303]"></span>
                    <span>Силова зона & помости</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA303]"></span>
                    <span>Потужне кардіо</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA303]"></span>
                    <span>Фітнес-бар & протеїн</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA303]"></span>
                    <span>3 сертифіковані тренери</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="relative z-10 p-5 sm:p-7 pt-0">
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-400 font-mono">
                  {smila.phone}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectBranch('smila');
                  }}
                  className={`h-11 sm:h-12 px-5 sm:px-6 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                    currentBranch === 'smila'
                      ? 'bg-[#FFA303] text-black hover:bg-[#ffb326]'
                      : 'bg-white/10 text-white hover:bg-[#FFA303] hover:text-black border border-white/10 hover:border-[#FFA303]'
                  }`}
                >
                  <span>{currentBranch === 'smila' ? 'Клуб вже обрано' : 'Увійти в клуб Сміла'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2: ZOLOTONOSHA */}
          <div
            onClick={() => onSelectBranch('zolo')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectBranch('zolo');
              }
            }}
            className={`group relative rounded-2xl sm:rounded-[28px] overflow-hidden border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              currentBranch === 'zolo'
                ? 'border-[#FFA303] bg-gradient-to-b from-[#1E1C18] to-[#12110F] shadow-[0_0_40px_rgba(255,163,3,0.22)] ring-1 ring-[#FFA303]/60'
                : 'border-white/10 hover:border-[#FFA303]/60 bg-[#141311] hover:bg-[#181714] shadow-xl'
            }`}
          >
            {/* Atmospheric Background Photo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                alt="3:16 GYM Золотоноша"
                fallbackTitle="3:16 GYM Золотоноша"
                className="w-full h-full object-cover object-center opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-[#0D0C0A]/85 to-black/50"></div>
            </div>

            {/* Top Meta Header inside card */}
            <div className="relative z-10 p-5 sm:p-7 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#FFA303] bg-[#FFA303]/10 border border-[#FFA303]/30 px-3 py-1 rounded-full">
                    Локація 02 · Золотоноша
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {zolo.instagram}
                  </span>
                </div>

                {currentBranch === 'zolo' ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FFA303] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#FFA303]/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Обрано</span>
                  </span>
                ) : (
                  <span className="text-xs font-mono text-slate-400 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {zolo.area}
                  </span>
                )}
              </div>

              {/* Title & Address */}
              <div className="space-y-1.5 pt-1">
                <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white group-hover:text-[#FFA303] transition-colors uppercase">
                  3:16 GYM · Золотоноша
                </h3>
                
                <div className="flex items-start gap-2 text-sm text-slate-200">
                  <MapPin className="w-4 h-4 text-[#FFA303] shrink-0 mt-0.5" />
                  <span className="font-semibold">{zolo.address}</span>
                </div>
              </div>

              {/* Club Spec Highlights */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FFA303] shrink-0" />
                  <span className="font-medium text-white">{zolo.workHoursWeekday}</span>
                  <span className="text-slate-400">· Сб/Нд до 20:00</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA303]"></span>
                    <span>450 м² новий центр</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA303]"></span>
                    <span>Кросфіт & бокс зона</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA303]"></span>
                    <span>Зручна парковка</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFA303]"></span>
                    <span>3 персональні тренери</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="relative z-10 p-5 sm:p-7 pt-0">
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-400 font-mono">
                  {zolo.phone}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectBranch('zolo');
                  }}
                  className={`h-11 sm:h-12 px-5 sm:px-6 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                    currentBranch === 'zolo'
                      ? 'bg-[#FFA303] text-black hover:bg-[#ffb326]'
                      : 'bg-white/10 text-white hover:bg-[#FFA303] hover:text-black border border-white/10 hover:border-[#FFA303]'
                  }`}
                >
                  <span>{currentBranch === 'zolo' ? 'Клуб вже обрано' : 'Увійти в клуб Золотоноша'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Assurance */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 relative z-10">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#FFA303] shrink-0" />
            <span>Перше пробне тренування — <strong>0 грн</strong> у будь-якому обраному залі</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Змінити локацію можна в шапці сайту в 1 клік</span>
          </div>
        </div>

      </div>
    </div>
  );
};
