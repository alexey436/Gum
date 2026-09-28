/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AthleticTicker } from './components/AthleticTicker';
import { BenefitsSection } from './components/BenefitsSection';
import { PricingSection } from './components/PricingSection';
import { GymZonesSection } from './components/GymZonesSection';
import { TrainersSection } from './components/TrainersSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingFormSection } from './components/BookingFormSection';
import { LocationsSection } from './components/LocationsSection';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Footer } from './components/Footer';
import { BranchSelectModal } from './components/BranchSelectModal';
import { GymBranch, PricingPlan, Trainer } from './types';

export default function App() {
  // Check if user previously chosen a branch in this session
  const [hasChosenBranch, setHasChosenBranch] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem('316gym_branch');
    } catch {
      return false;
    }
  });

  const [currentBranch, setCurrentBranch] = useState<GymBranch>(() => {
    try {
      const saved = localStorage.getItem('316gym_branch');
      if (saved === 'smila' || saved === 'zolo') {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'smila';
  });

  // Always show branch selection immediately upon entering the site if not chosen yet
  const [isBranchModalOpen, setIsBranchModalOpen] = useState<boolean>(() => {
    try {
      return !localStorage.getItem('316gym_branch');
    } catch {
      return true;
    }
  });

  const [preselectedService, setPreselectedService] = useState<string>('');
  const [preselectedTrainer, setPreselectedTrainer] = useState<string>('');

  const handleSelectBranch = (branch: GymBranch) => {
    setCurrentBranch(branch);
    setHasChosenBranch(true);
    setIsBranchModalOpen(false);
    try {
      localStorage.setItem('316gym_branch', branch);
    } catch {
      // ignore
    }
  };

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setPreselectedService(`Абонемент: ${plan.name} (${plan.price} грн)`);
    scrollToBooking();
  };

  const handleSelectTrainer = (trainer: Trainer) => {
    setPreselectedTrainer(trainer.name);
    setPreselectedService(`Тренування з тренером: ${trainer.name}`);
    if (trainer.branch !== 'both') {
      setCurrentBranch(trainer.branch);
    }
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#0B0A09] text-[#F3F3F5] flex flex-col font-sans selection:bg-[#FFA303] selection:text-black">
      
      {/* Immediate Branch Selector (Opens right away on site entry) */}
      <BranchSelectModal
        isOpen={isBranchModalOpen}
        currentBranch={currentBranch}
        onSelectBranch={handleSelectBranch}
        canClose={hasChosenBranch}
        onClose={() => setIsBranchModalOpen(false)}
      />

      {/* Header */}
      <Header
        currentBranch={currentBranch}
        onOpenBranchModal={() => setIsBranchModalOpen(true)}
        onOpenBooking={scrollToBooking}
      />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero
          currentBranch={currentBranch}
          onOpenBranchModal={() => setIsBranchModalOpen(true)}
          onOpenBooking={scrollToBooking}
          onScrollToPricing={scrollToPricing}
        />

        {/* Dynamic Running Athletic Ticker */}
        <AthleticTicker currentBranch={currentBranch} />

        {/* Benefits Section */}
        <BenefitsSection currentBranch={currentBranch} />

        {/* Pricing Section */}
        <PricingSection
          currentBranch={currentBranch}
          onSelectPlan={handleSelectPlan}
        />

        {/* Gym Zones Section with authentic photos & zoom */}
        <GymZonesSection currentBranch={currentBranch} />

        {/* Trainers Section with coach portraits & credentials */}
        <TrainersSection
          currentBranch={currentBranch}
          onSelectTrainer={handleSelectTrainer}
        />

        {/* Reviews Section */}
        <ReviewsSection currentBranch={currentBranch} />

        {/* Booking Form Section */}
        <BookingFormSection
          currentBranch={currentBranch}
          onOpenBranchModal={() => setIsBranchModalOpen(true)}
          preselectedService={preselectedService}
          preselectedTrainer={preselectedTrainer}
        />

        {/* Locations & Contacts Section */}
        <LocationsSection
          currentBranch={currentBranch}
          onOpenBranchModal={() => setIsBranchModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        currentBranch={currentBranch}
        onOpenBooking={scrollToBooking}
        onOpenBranchModal={() => setIsBranchModalOpen(true)}
      />

      {/* Mobile Ergonomic Bottom Quick Bar */}
      <MobileQuickBar
        currentBranch={currentBranch}
        onOpenBooking={scrollToBooking}
      />

    </div>
  );
}
