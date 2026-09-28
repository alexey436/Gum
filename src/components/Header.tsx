import React, { useState } from 'react';
import { Menu, X, Phone, Instagram, MapPin, ArrowRight, Dumbbell, ChevronDown } from 'lucide-react';
import { GymBranch } from '../types';
import { BRANCHES_DATA } from '../utils/data';
import { Logo } from './Logo';

interface HeaderProps {
  currentBranch: GymBranch;
  onOpenBranchModal: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentBranch,
  onOpenBranchModal,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeBranch = BRANCHES_DATA[currentBranch];

  const navLinks = [
    { label: 'Абонементи', href: '#pricing' },
    { label: 'Зони залу', href: '#zones' },
    { label: 'Тренери', href: '#trainers' },
    { label: 'Відгуки', href: '#reviews' },
    { label: 'Локація', href: '#locations' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B0A09]/90 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Zone 1: Brand Wordmark with Active Branch Selector */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            <a
              href="./"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  try {
                    window.history.pushState(null, '', window.location.pathname);
                  } catch {}
                }
              }}
              className="inline-flex items-center tap-target py-1 cursor-pointer select-none"
              title="3:16 GYM — Головна сторінка"
              aria-label="3:16 GYM — Головна сторінка"
            >
              <Logo size="md" />
            </a>

            {/* Premium Active City Selector with 1-click Change Modal Trigger */}
            <button
              type="button"
              onClick={onOpenBranchModal}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FFA303]/60 transition-all tap-target text-left group cursor-pointer"
              title="Натисніть щоб обрати інше місто"
            >
              <div className="w-6 h-6 rounded-lg bg-[#FFA303]/10 border border-[#FFA303]/20 flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5 text-[#FFA303]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] sm:text-[10px] text-neutral-400 font-semibold uppercase tracking-wider hidden xs:block">
                  Клуб
                </span>
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFA303] transition-colors flex items-center gap-1">
                  <span className="truncate max-w-[85px] sm:max-w-none">{activeBranch.city.replace('м. ', '')}</span>
                  <ChevronDown className="w-3 h-3 text-[#FFA303] group-hover:translate-y-0.5 transition-transform" />
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#FFA303] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFA303] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions + Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Instagram link (desktop) */}
            <a
              href={activeBranch.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-300 bg-white/[0.04] hover:bg-white/[0.08] hover:text-[#FFA303] border border-white/10 rounded-xl transition-colors tap-target"
              title={`Instagram ${activeBranch.name}`}
            >
              <Instagram className="w-3.5 h-3.5 text-[#FFA303]" />
              <span>{activeBranch.instagram}</span>
            </a>

            {/* Quick Phone Call (desktop) */}
            <a
              href={`tel:${activeBranch.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-colors tap-target"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFA303]" />
              <span className="font-mono tabular-nums">{activeBranch.phone}</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-black text-black bg-[#FFA303] hover:bg-[#FFB326] active:scale-[0.98] rounded-xl transition-all shadow-md shadow-[#FFA303]/20 whitespace-nowrap tap-target items-center gap-1.5 cursor-pointer"
            >
              <span>Пробне 0 грн</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Booking Icon Button (visible only on xs mobile where text doesn't fit) */}
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-2 text-xs font-black text-black bg-[#FFA303] hover:bg-[#FFB326] active:scale-[0.98] rounded-xl transition-all shadow-xs tap-target flex items-center gap-1"
              aria-label="Записатись на пробне заняття 0 грн"
            >
              <Dumbbell className="w-3.5 h-3.5" />
              <span>0 грн</span>
            </button>

            {/* Mobile Hamburger Button (hidden on desktop lg:hidden) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-colors tap-target flex items-center justify-center border border-white/10 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FFA303]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0B0A09]/98 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          
          {/* Active Branch summary in mobile menu */}
          <div className="mb-3.5 p-3.5 bg-neutral-900/80 rounded-2xl border border-white/10 flex items-center justify-between gap-3">
            <div className="space-y-0.5 min-w-0">
              <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider block">
                Обраний клуб:
              </span>
              <div className="font-extrabold text-white text-sm flex items-center gap-1.5 truncate">
                <MapPin className="w-3.5 h-3.5 text-[#FFA303] shrink-0" />
                <span className="truncate">{activeBranch.name}</span>
              </div>
              <div className="text-[11px] text-neutral-400 truncate">{activeBranch.address}</div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBranchModal();
              }}
              className="px-3 py-2 bg-[#FFA303] hover:bg-[#FFB326] text-black font-extrabold text-xs rounded-xl tap-target whitespace-nowrap shadow-xs shrink-0 cursor-pointer active:scale-95"
            >
              Змінити
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1 pb-3 border-b border-white/[0.08]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-3 text-base font-bold text-neutral-200 hover:text-white hover:bg-white/[0.04] rounded-xl transition-colors tap-target"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#FFA303]" />
              </a>
            ))}
          </div>

          <div className="pt-3.5 space-y-2.5">
            {/* Direct Phone Call */}
            <a
              href={`tel:${activeBranch.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.04] text-white font-bold text-xs sm:text-sm border border-white/10 tap-target"
            >
              <Phone className="w-4 h-4 text-[#FFA303]" />
              <span>Рецепція: {activeBranch.phone}</span>
            </a>

            {/* Direct Instagram link */}
            <a
              href={activeBranch.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-1.5 tap-target hover:text-[#FFA303]"
            >
              <Instagram className="w-4 h-4 text-[#FFA303]" />
              <span>Instagram: {activeBranch.instagram}</span>
            </a>

            {/* CTA in mobile menu */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full h-12 rounded-xl bg-[#FFA303] hover:bg-[#FFB326] active:scale-[0.98] text-black font-extrabold text-sm flex items-center justify-center gap-2 tap-target-lg shadow-md shadow-[#FFA303]/25 cursor-pointer mt-1"
            >
              <Dumbbell className="w-4 h-4" />
              <span>Записатись на безкоштовне тренування</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
