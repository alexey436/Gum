import React, { useState } from 'react';
import { Dumbbell, Activity, Flame, Coffee, Check, Maximize2, X, ChevronRight, Sparkles } from 'lucide-react';
import { GYM_ZONES, BRANCHES_DATA } from '../utils/data';
import { GymBranch, GymZoneItem } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface GymZonesProps {
  currentBranch: GymBranch;
}

export const GymZonesSection: React.FC<GymZonesProps> = ({ currentBranch }) => {
  const [activeZoneId, setActiveZoneId] = useState<string>(GYM_ZONES[0].id);
  const [modalZone, setModalZone] = useState<GymZoneItem | null>(null);

  const icons: Record<string, React.FC<{ className?: string }>> = {
    heavy: Dumbbell,
    cardio: Activity,
    functional: Flame,
    bar: Coffee,
  };

  const activeBranch = BRANCHES_DATA[currentBranch];
  const activeZone = GYM_ZONES.find((z) => z.id === activeZoneId) || GYM_ZONES[0];

  return (
    <section id="zones" className="py-14 sm:py-24 bg-[#0B0A09] border-b border-white/[0.08] relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FFA303]/[0.04] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FFA303] uppercase tracking-widest bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#FFA303]" />
            <span>Зони простору · {activeBranch.city}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase tracking-tight text-balance">
            Преміум обладнання та атмосфера
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl mx-auto">
            Понад {activeBranch.area} простору у {activeBranch.name}. Жодних черг, щоденний сервіс та ідеальна чистота:
          </p>
        </div>

        {/* Mobile Quick-Switch Tabs (optimized for phone swipe & tap) */}
        <div className="flex sm:hidden overflow-x-auto gap-2 pb-3 mb-6 no-scrollbar -mx-4 px-4">
          {GYM_ZONES.map((zone) => {
            const Icon = icons[zone.id] || Dumbbell;
            const isSelected = activeZoneId === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZoneId(zone.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 active:scale-95 ${
                  isSelected
                    ? 'bg-[#FFA303] text-black shadow-md shadow-[#FFA303]/30'
                    : 'bg-white/[0.05] text-neutral-300 border border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{zone.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Featured Zone Highlight Card */}
        <div className="block sm:hidden mb-8">
          <div className="rounded-2xl overflow-hidden border border-[#FFA303]/40 bg-[#141311] shadow-xl">
            <div className="relative h-56 w-full">
              <ImageWithFallback
                src={activeZone.imageUrl}
                alt={activeZone.title}
                className="w-full h-full object-cover"
                fallbackTitle={activeZone.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-transparent to-black/30"></div>
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[11px] font-mono font-bold text-[#FFA303]">
                {activeZone.metric}
              </div>
              <button
                onClick={() => setModalZone(activeZone)}
                className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/15 active:scale-90 transition-transform"
                title="Збільшити фото"
              >
                <Maximize2 className="w-4 h-4 text-[#FFA303]" />
              </button>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#FFA303] uppercase tracking-wider">
                  {activeZone.tag}
                </span>
                <span className="text-xs text-neutral-400 font-mono">3:16 GYM</span>
              </div>

              <h3 className="text-xl font-black text-white font-display uppercase tracking-tight">
                {activeZone.title}
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed">
                {activeZone.desc}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                {activeZone.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-[#FFA303] shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop & Tablet Luxury Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {GYM_ZONES.map((zone) => {
            const Icon = icons[zone.id] || Dumbbell;
            return (
              <div
                key={zone.id}
                className="group rounded-3xl bg-[#141311] border border-white/10 hover:border-[#FFA303]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_12px_40px_rgba(255,163,3,0.12)]"
              >
                {/* Photo Header */}
                <div className="relative h-60 sm:h-68 w-full overflow-hidden bg-neutral-900">
                  <ImageWithFallback
                    src={zone.imageUrl}
                    alt={zone.title}
                    fallbackTitle={zone.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-[#141311]/30 to-black/40"></div>

                  {/* Top Bar Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                    <span className="text-xs font-mono font-bold text-[#FFA303] bg-black/60 backdrop-blur-md px-3 py-1 rounded-xl border border-[#FFA303]/30 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FFA303] animate-pulse"></span>
                      <span>{zone.metric}</span>
                    </span>

                    <button
                      onClick={() => setModalZone(zone)}
                      className="p-2 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/15 hover:border-[#FFA303] hover:text-[#FFA303] transition-all cursor-pointer opacity-90 hover:opacity-100 active:scale-95"
                      title="Відкрити фото на весь екран"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#FFA303]/20 backdrop-blur-md border border-[#FFA303]/40 flex items-center justify-center text-[#FFA303]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-neutral-200 tracking-wider uppercase font-mono">
                      {zone.tag}
                    </span>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight group-hover:text-[#FFA303] transition-colors">
                      {zone.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {zone.desc}
                    </p>
                  </div>

                  {/* Features tag row */}
                  <div className="pt-4 border-t border-white/[0.08] grid grid-cols-2 gap-2">
                    {zone.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#FFA303] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ambient bottom banner reassurance */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFA303]/10 text-[#FFA303] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-neutral-300">
              <span className="text-white font-bold">Усі зони входять у будь-який абонемент.</span> Займайтеся без обмежень за часом чи тренажерами.
            </div>
          </div>
          <a
            href="#pricing"
            className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-[#FFA303] hover:text-black text-white text-xs font-bold transition-all border border-white/10 flex items-center gap-1.5 shrink-0"
          >
            <span>Переглянути абонементи</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Lightbox / Fullscreen Modal */}
      {modalZone && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setModalZone(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#12110F] border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalZone(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:text-[#FFA303] border border-white/20 z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 sm:h-96 w-full">
              <ImageWithFallback
                src={modalZone.imageUrl}
                alt={modalZone.title}
                className="w-full h-full object-cover"
                fallbackTitle={modalZone.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12110F] via-transparent to-transparent"></div>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#FFA303] bg-[#FFA303]/10 px-2.5 py-1 rounded-lg border border-[#FFA303]/30">
                  {modalZone.metric}
                </span>
                <span className="text-xs text-neutral-400 font-mono">{modalZone.tag}</span>
              </div>

              <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight">
                {modalZone.title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {modalZone.desc}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/10">
                {modalZone.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-200">
                    <Check className="w-3.5 h-3.5 text-[#FFA303]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
