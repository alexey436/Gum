import React from 'react';
import { Star, CheckCircle2, MapPin, Quote, Sparkles } from 'lucide-react';
import { REVIEWS_DATA, BRANCHES_DATA } from '../utils/data';
import { GymBranch } from '../types';

interface ReviewsProps {
  currentBranch: GymBranch;
}

export const ReviewsSection: React.FC<ReviewsProps> = ({ currentBranch }) => {
  const activeBranch = BRANCHES_DATA[currentBranch];

  // Exclusively show reviews from the selected branch
  const branchReviews = REVIEWS_DATA.filter((r) => r.branchId === currentBranch);

  return (
    <section id="reviews" className="py-14 sm:py-24 bg-[#0B0A09] border-b border-white/[0.08] relative overflow-hidden">
      {/* Amber blur accent */}
      <div className="absolute -bottom-20 right-10 w-72 h-72 bg-[#FFA303]/[0.04] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFA303] uppercase tracking-wider bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#FFA303]" />
            <span>Відгуки клієнтів · {activeBranch.city}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-display uppercase tracking-tight text-balance">
            Що кажуть відвідувачі
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300">
            Реальні враження людей, які щодня тренуються у нашому клубі ({activeBranch.instagram}):
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branchReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#141311] border border-white/10 hover:border-[#FFA303]/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* 5 Stars Rating */}
                  <div className="flex items-center gap-1 text-[#FFA303]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFA303]" />
                    ))}
                  </div>

                  <Quote className="w-6 h-6 text-white/10 group-hover:text-[#FFA303]/30 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFA303]" />
                  </div>
                  <div className="text-[11px] text-[#FFA303] mt-0.5">{rev.branchLabel}</div>
                </div>
                <span className="text-[10px] text-neutral-400 font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Instagram Trust Bar */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="text-xs sm:text-sm text-neutral-300">
            Більше фото трансформацій та відгуків дивіться у нашому Instagram: <strong className="text-white">{activeBranch.instagram}</strong>
          </div>
          <a
            href={activeBranch.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#FFA303] hover:bg-[#FFB326] active:scale-95 text-black font-extrabold text-xs transition-all shadow-md shrink-0"
          >
            Відкрити {activeBranch.instagram}
          </a>
        </div>

      </div>
    </section>
  );
};
