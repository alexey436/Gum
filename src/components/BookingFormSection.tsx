import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, Phone, User, MapPin, Dumbbell, Sparkles, Check, ChevronDown } from 'lucide-react';
import { handlePhoneKeyDown, formatPhoneNumber, validatePhone, validateName, validateEmail, extractDigits, SUPPORTED_COUNTRIES } from '../utils/validation';
import { GymBranch } from '../types';
import { BRANCHES_DATA } from '../utils/data';

interface BookingFormProps {
  currentBranch: GymBranch;
  onOpenBranchModal: () => void;
  preselectedService?: string;
  preselectedTrainer?: string;
}

export const BookingFormSection: React.FC<BookingFormProps> = ({
  currentBranch,
  onOpenBranchModal,
  preselectedService,
  preselectedTrainer,
}) => {
  const selectedCountry = SUPPORTED_COUNTRIES[0]; // Ukraine +380

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    branch: currentBranch,
    serviceType: preselectedService || 'Безкоштовне пробне тренування (0 грн)',
    trainerName: preselectedTrainer || '',
    email: '',
    comment: '',
    acceptTerms: true,
  });

  const [touched, setTouched] = useState({
    fullName: false,
    phone: false,
    email: false,
  });

  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState<typeof formData | null>(null);

  // Sync when prop changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      branch: currentBranch,
      serviceType: preselectedService || prev.serviceType,
      trainerName: preselectedTrainer || prev.trainerName,
    }));
  }, [currentBranch, preselectedService, preselectedTrainer]);

  // Validations
  const nameVal = validateName(formData.fullName);
  const phoneVal = validatePhone(formData.phone, selectedCountry);
  const emailVal = formData.email ? validateEmail(formData.email) : { isValid: true, error: null };

  const isFormValid =
    nameVal.isValid &&
    phoneVal.isValid &&
    emailVal.isValid &&
    formData.acceptTerms;

  const servicesList = [
    'Безкоштовне пробне тренування (0 грн)',
    'Повний безліміт 1 місяць (850 грн)',
    'Денний абонемент (650 грн)',
    '10 занять з тренером (2,400 грн)',
    'Безліміт 3 місяці (2,250 грн)',
    'Консультація чергового тренера',
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const cleanDigits = extractDigits(rawVal);
    const formatted = formatPhoneNumber(cleanDigits, selectedCountry);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    setTouched((prev) => ({ ...prev, phone: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, phone: true, email: true });

    if (!isFormValid) {
      return;
    }

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FFA303', '#ffffff', '#ffb326'],
      });
    } catch {
      // safe fallback
    }

    setSubmittedSummary({ ...formData });
    setSubmittedSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      branch: currentBranch,
      serviceType: servicesList[0],
      trainerName: '',
      email: '',
      comment: '',
      acceptTerms: true,
    });
    setTouched({ fullName: false, phone: false, email: false });
    setSubmittedSuccess(false);
    setSubmittedSummary(null);
  };

  const activeBranch = BRANCHES_DATA[formData.branch];

  return (
    <section id="booking" className="py-12 sm:py-20 bg-[#141311] border-b border-[#2A2826] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Context & Guarantees matching 3.jpg */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block text-xs font-bold text-[#FFA303] uppercase tracking-wider">
              Швидкий запис
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display uppercase tracking-tight leading-tight">
              У вас ще залишились якісь питання?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Залиште заявку, і наш черговий тренер зв'яжеться з вами за 10 хвилин, допоможе обрати програму та забронює шафку на безкоштовне пробне заняття.
            </p>

            {/* Branch Card Indicator */}
            <div className="p-4 rounded-2xl bg-[#222121] border border-[#2A2826] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#FFA303] uppercase tracking-wider">
                  Обраний клуб:
                </span>
                <button
                  type="button"
                  onClick={onOpenBranchModal}
                  className="text-[11px] text-[#FFA303] hover:underline font-semibold cursor-pointer"
                >
                  Змінити місто
                </button>
              </div>
              <div className="text-base font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFA303]" />
                <span>{activeBranch.name}</span>
              </div>
              <div className="text-xs text-slate-300">{activeBranch.address}</div>
              <div className="text-xs text-[#FFA303] font-mono font-bold">{activeBranch.phone}</div>
            </div>

            {/* Direct Active Instagram Link */}
            <div className="pt-2 text-xs text-slate-300 space-y-2">
              <div className="text-slate-400">Офіційна Instagram-сторінка клубу у {activeBranch.city}:</div>
              <a
                href={activeBranch.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#222121] border border-[#2A2826] text-white hover:text-[#FFA303] transition-colors"
              >
                <span>{activeBranch.instagram}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form adhering to Manual Validation */}
          <div className="lg:col-span-7 bg-[#1B1A17] border border-[#2A2826] rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            
            {submittedSuccess && submittedSummary ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#FFA303]/20 border-2 border-[#FFA303] text-[#FFA303] flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#FFA303] uppercase tracking-wider">
                    Заявку успішно прийнято!
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white">
                    Дякуємо, {submittedSummary.fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Ваші дані перевірено. Менеджер клубу <span className="text-white font-bold">{BRANCHES_DATA[submittedSummary.branch].name}</span> зателефонує вам на номер{' '}
                    <span className="font-mono text-[#FFA303] font-bold">+380 {submittedSummary.phone}</span> протягом 10 хвилин.
                  </p>
                </div>

                <div className="bg-[#222121] border border-[#2A2826] rounded-2xl p-4 text-left max-w-md mx-auto text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Послуга:</span>
                    <span className="font-semibold text-white">{submittedSummary.serviceType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Локація:</span>
                    <span className="font-semibold text-white">{BRANCHES_DATA[submittedSummary.branch].city}</span>
                  </div>
                  {submittedSummary.trainerName && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Тренер:</span>
                      <span className="font-semibold text-[#FFA303]">{submittedSummary.trainerName}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl bg-[#222121] hover:bg-[#FFA303] hover:text-black text-white text-xs font-bold transition-all tap-target border border-[#2A2826]"
                  >
                    Записати іншого клієнта
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="border-b border-[#2A2826] pb-3">
                  <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight">
                    Онлайн-запис до залу
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Сувора фронтенд-валідація телефону та полів за інженерним стандартом.
                  </p>
                </div>

                {/* Field 1: Branch Indicator */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-300">
                      Локація тренувань *
                    </label>
                    <button
                      type="button"
                      onClick={onOpenBranchModal}
                      className="text-xs text-[#FFA303] hover:underline font-bold cursor-pointer"
                    >
                      Змінити місто
                    </button>
                  </div>
                  <div className="p-3.5 rounded-xl border border-[#FFA303]/60 bg-[#222121] flex items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="text-xs font-black text-white flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FFA303]" />
                        <span>{activeBranch.name}</span>
                      </div>
                      <div className="text-[11px] text-slate-300">
                        {activeBranch.address}
                      </div>
                    </div>
                    <span className="text-[10px] text-black font-extrabold uppercase px-2 py-0.5 rounded bg-[#FFA303] shrink-0">
                      Обрано
                    </span>
                  </div>
                </div>

                {/* Field 2: Full Name */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="user-name" className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#FFA303]" />
                      <span>Ваше ім'я *</span>
                    </label>
                    {touched.fullName && (
                      <span
                        className={`text-[11px] font-medium flex items-center gap-1 ${
                          nameVal.isValid ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {nameVal.isValid ? (
                          <>
                            <CheckCircle2 className="w-3 h-3" /> Вірно
                          </>
                        ) : (
                          <>
                            <AlertCircle className="w-3 h-3" /> {nameVal.error}
                          </>
                        )}
                      </span>
                    )}
                  </div>
                  <input
                    id="user-name"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      setTouched((prev) => ({ ...prev, fullName: true }));
                    }}
                    onBlur={() => setTouched((prev) => ({ ...prev, fullName: true }))}
                    placeholder="Наприклад: Дмитро Мельник"
                    className={`w-full h-12 px-3.5 rounded-xl border text-xs sm:text-sm bg-[#141311] text-white outline-none transition-colors ${
                      touched.fullName
                        ? nameVal.isValid
                          ? 'border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                          : 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-[#2A2826] focus:border-[#FFA303]'
                    }`}
                  />
                </div>

                {/* Field 3: Strict Phone Number with Letter Blocking & Auto-Mask */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="user-phone" className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#FFA303]" />
                      <span>Номер телефону (тільки цифри) *</span>
                    </label>
                    {touched.phone && (
                      <span
                        className={`text-[11px] font-medium flex items-center gap-1 ${
                          phoneVal.isValid ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {phoneVal.isValid ? (
                          <>
                            <CheckCircle2 className="w-3 h-3" /> Номер валідний
                          </>
                        ) : (
                          <>
                            <AlertCircle className="w-3 h-3" /> {phoneVal.error}
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-12 px-3 rounded-xl border border-[#2A2826] bg-[#222121] text-xs font-mono font-bold text-slate-200 flex items-center gap-1 shrink-0">
                      <span>🇺🇦</span>
                      <span>+380</span>
                    </div>

                    <input
                      id="user-phone"
                      type="tel"
                      inputMode="numeric"
                      value={formData.phone}
                      onKeyDown={handlePhoneKeyDown}
                      onChange={handlePhoneChange}
                      onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                      placeholder="(67) 123-45-67"
                      className={`flex-1 h-12 px-3.5 rounded-xl border font-mono text-xs sm:text-sm bg-[#141311] text-white outline-none transition-colors ${
                        touched.phone
                          ? phoneVal.isValid
                            ? 'border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                            : 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-[#2A2826] focus:border-[#FFA303]'
                      }`}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                    <span>Літери блокуються автоматично при введенні</span>
                    <span className="font-mono text-[#FFA303]">9 цифр обов'язково</span>
                  </div>
                </div>

                {/* Field 4: Service / Goal selector */}
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Ціль або тип абонемента
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full h-12 px-3 rounded-xl border border-[#2A2826] bg-[#141311] text-xs sm:text-sm text-white outline-none focus:border-[#FFA303] tap-target"
                  >
                    {servicesList.map((svc) => (
                      <option key={svc} value={svc} className="bg-[#141311] text-white">
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Optional Email with domain verification */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="user-email" className="text-xs font-bold text-slate-300">
                      Електронна пошта (необов'язково)
                    </label>
                    {touched.email && formData.email && (
                      <span
                        className={`text-[11px] font-medium flex items-center gap-1 ${
                          emailVal.isValid ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {emailVal.isValid ? 'Email валідний' : emailVal.error}
                      </span>
                    )}
                  </div>
                  <input
                    id="user-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setTouched((prev) => ({ ...prev, email: true }));
                    }}
                    placeholder="name@gmail.com"
                    className="w-full h-11 px-3.5 rounded-xl border border-[#2A2826] bg-[#141311] text-xs sm:text-sm text-white outline-none focus:border-[#FFA303] transition-colors"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    id="terms-booking"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded text-[#FFA303] border-[#2A2826] bg-[#141311] focus:ring-[#FFA303]"
                  />
                  <label htmlFor="terms-booking" className="text-xs text-slate-300 cursor-pointer select-none">
                    Погоджуюсь з правилами відвідування спортивного клубу 3:16 GYM.
                  </label>
                </div>

                {/* Primary CTA Button (Brand athletic gold, luxury shimmer, prominent high contrast) */}
                <button
                  type="submit"
                  disabled={!formData.acceptTerms}
                  className="shimmer-effect w-full h-14 px-6 rounded-2xl bg-gradient-to-r from-[#FFA303] via-[#FFB326] to-[#FFA303] hover:brightness-110 active:scale-[0.98] text-black font-black font-display text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-3 shadow-[0_8px_28px_rgba(255,163,3,0.32)] hover:shadow-[0_12px_36px_rgba(255,163,3,0.48)] border border-[#FFC55A]/50 transition-all duration-200 tap-target-lg cursor-pointer group disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  <span className="leading-none">Підтвердити запис на тренування</span>
                  <Send className="w-5 h-5 text-black stroke-[2.5] shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
