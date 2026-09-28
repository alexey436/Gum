import React from 'react';
import { MapPin, Phone, Instagram, Clock, Navigation, ExternalLink, RefreshCw, Car, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BRANCHES_DATA } from '../utils/data';
import { GymBranch } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface LocationsProps {
  currentBranch: GymBranch;
  onOpenBranchModal: () => void;
}

export const LocationsSection: React.FC<LocationsProps> = ({
  currentBranch,
  onOpenBranchModal,
}) => {
  const activeBranch = BRANCHES_DATA[currentBranch];
  const otherBranchKey: GymBranch = currentBranch === 'smila' ? 'zolo' : 'smila';
  const otherBranch = BRANCHES_DATA[otherBranchKey];

  const mapSearchQuery = encodeURIComponent(
    `${activeBranch.city} ${activeBranch.address} спортзал 3.16`
  );

  return (
    <section id="locations" className="py-14 sm:py-24 bg-[#0E0D0B] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFA303] uppercase tracking-wider bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-[#FFA303]" />
            <span>Локація та контакти · {activeBranch.city}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase tracking-tight text-balance">
            Як нас знайти у {activeBranch.city}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300">
            Сучасний клуб {activeBranch.name} у центрі міста зі зручним під'їздом та вільною парковкою:
          </p>
        </div>

        {/* Location Showcase Card with Photo + Details */}
        <div className="max-w-4xl mx-auto bg-[#141311] border border-white/10 hover:border-[#FFA303]/40 rounded-3xl overflow-hidden shadow-2xl transition-all">
          
          {/* Photo Banner with live tags */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-neutral-900">
            <ImageWithFallback
              src={activeBranch.imageUrl || ''}
              alt={activeBranch.name}
              fallbackTitle={activeBranch.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-black/40 to-black/20"></div>

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="text-xs font-black text-black bg-[#FFA303] uppercase tracking-wider px-3 py-1 rounded-xl shadow-md font-mono">
                Обраний клуб · {activeBranch.city}
              </span>
              <span className="text-xs font-mono font-bold text-neutral-200 bg-black/60 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15">
                {activeBranch.area}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase tracking-tight">
                {activeBranch.name}
              </h3>
              <p className="text-xs text-neutral-300 flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#FFA303]" />
                <span>{activeBranch.address}, {activeBranch.city}</span>
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header info & Instagram button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
              <div>
                <span className="text-xs text-neutral-400">Офіційна сторінка у соцмережах:</span>
                <div className="text-sm font-bold text-[#FFA303] mt-0.5">{activeBranch.instagram}</div>
              </div>

              <a
                href={activeBranch.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-[#FFA303] hover:text-black text-white font-bold text-xs transition-all border border-white/10 hover:border-[#FFA303] tap-target self-start sm:self-auto active:scale-95"
              >
                <Instagram className="w-4 h-4 text-[#FFA303] group-hover:text-black" />
                <span>Відкрити Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Details list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-300 pb-5 border-b border-white/[0.08]">
              
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="w-9 h-9 rounded-xl bg-[#FFA303]/10 border border-[#FFA303]/20 flex items-center justify-center shrink-0 text-[#FFA303]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Точна адреса:</div>
                  <div className="text-neutral-200 mt-0.5 text-xs">{activeBranch.address}, {activeBranch.city}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="w-9 h-9 rounded-xl bg-[#FFA303]/10 border border-[#FFA303]/20 flex items-center justify-center shrink-0 text-[#FFA303]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Графік роботи:</div>
                  <div className="text-neutral-200 mt-0.5 text-xs">{activeBranch.workHoursWeekday}</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">{activeBranch.workHoursWeekend}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="w-9 h-9 rounded-xl bg-[#FFA303]/10 border border-[#FFA303]/20 flex items-center justify-center shrink-0 text-[#FFA303]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Телефон рецепції:</div>
                  <a
                    href={`tel:${activeBranch.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-mono text-[#FFA303] font-bold text-xs sm:text-sm hover:underline mt-0.5 inline-block"
                  >
                    {activeBranch.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="w-9 h-9 rounded-xl bg-[#FFA303]/10 border border-[#FFA303]/20 flex items-center justify-center shrink-0 text-[#FFA303]">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs">Паркування & комфорт:</div>
                  <div className="text-neutral-300 mt-0.5 text-xs">Вільні паркомісця біля клубу, роздягальні з теплим душем.</div>
                </div>
              </div>

            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapSearchQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all tap-target border border-white/10 active:scale-98"
              >
                <Navigation className="w-4 h-4 text-[#FFA303]" />
                <span>Прокласти маршрут у Google Maps</span>
              </a>

              <a
                href={`tel:${activeBranch.phone.replace(/[^0-9+]/g, '')}`}
                className="h-12 px-4 rounded-xl bg-[#FFA303] hover:bg-[#ffb326] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all tap-target shadow-md shadow-[#FFA303]/20 active:scale-98"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>
                  Зателефонувати
                  <span className="hidden sm:inline">: {activeBranch.phone}</span>
                </span>
              </a>
            </div>

            {/* Switch branch banner */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="text-xs text-neutral-400">
                Шукаєте інший зал? Маємо також філіал у <span className="text-white font-bold">{otherBranch.city}</span> ({otherBranch.address}).
              </div>
              <button
                type="button"
                onClick={onOpenBranchModal}
                className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#FFA303] font-bold text-xs border border-white/10 hover:border-[#FFA303]/50 transition-colors tap-target flex items-center gap-1.5 shrink-0 cursor-pointer active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Змінити філіал на {otherBranch.city}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
