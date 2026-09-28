import { BranchInfo, PricingPlan, Trainer, GymZoneItem } from '../types';

export const BRANCHES_DATA: Record<'smila' | 'zolo', BranchInfo> = {
  smila: {
    id: 'smila',
    name: '3:16 GYM Сміла',
    city: 'м. Сміла',
    address: 'вул. Героїв Небесної Сотні, 31',
    instagram: '@3.16gym',
    instagramUrl: 'https://www.instagram.com/3.16gym/',
    phone: '+380 (67) 316-00-11',
    workHoursWeekday: 'Пн-Пт: 07:00 – 22:00',
    workHoursWeekend: 'Сб: 08:00 – 20:00, Нд: 09:00 – 18:00',
    area: '420 м²',
    mapCoords: '49.2195,31.8742',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  },
  zolo: {
    id: 'zolo',
    name: '3:16 GYM Золотоноша',
    city: 'м. Золотоноша',
    address: 'вул. Шевченка, 45 (Центр)',
    instagram: '@3.16zolo',
    instagramUrl: 'https://www.instagram.com/3.16zolo/',
    phone: '+380 (98) 316-00-22',
    workHoursWeekday: 'Пн-Пт: 07:00 – 22:00',
    workHoursWeekend: 'Сб: 08:00 – 20:00, Нд: 09:00 – 18:00',
    area: '450 м²',
    mapCoords: '49.6682,32.0396',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
  },
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'single',
    name: 'Разове тренування',
    duration: '1 відвідування',
    price: 150,
    timeLimit: 'Без обмежень по часу',
    features: [
      'Доступ до всіх тренажерів залу',
      'Кардіо-зона та вільні ваги',
      'Комфортна роздягальня та душ',
      'Вступний інструктаж чергового тренера',
    ],
  },
  {
    id: 'daytime',
    name: 'Денний абонемент',
    duration: '1 місяць (до 16:00)',
    price: 650,
    timeLimit: 'Вхід з 07:00 до 16:00',
    features: [
      'Безліміт відвідувань у денні години',
      'Менше людей у залі',
      'Доступ до кардіо та силової зони',
      'Шафка та душова кімната',
    ],
  },
  {
    id: 'unlimited-1m',
    name: 'Повний Безліміт',
    duration: '1 місяць',
    price: 850,
    popular: true,
    timeLimit: 'Повний день (07:00 - 22:00)',
    features: [
      'Безлімітне відвідування будь-коли',
      'Діє у будні та вихідні дні',
      'Безкоштовна заморозка на 7 днів',
      'Знижка 10% на фітнес-бар',
      'Складання стартової програми',
    ],
  },
  {
    id: 'unlimited-3m',
    name: 'Безліміт 3 Місяці',
    duration: '3 місяці (90 днів)',
    price: 2250,
    timeLimit: 'Повний день (07:00 - 22:00)',
    features: [
      'Економія 300 грн від помісячної оплати',
      'Заморозка абонемента до 14 днів',
      '1 персональне тренування у подарунок',
      'Аналіз складу тіла та заміри',
    ],
  },
  {
    id: 'trainer-pack',
    name: '10 Занять з Тренером',
    duration: 'Персональний пакет',
    price: 2400,
    timeLimit: 'Зручний графік з тренером',
    features: [
      '10 індивідуальних занять 1-на-1',
      'Індивідуальний план харчування',
      'Контроль техніки та безпека суглобів',
      'Постійна підтримка тренера у месенджері',
    ],
  },
  {
    id: 'student',
    name: 'Студентський / Учнівський',
    duration: '1 місяць',
    price: 600,
    timeLimit: 'За наявності студентського квитка',
    features: [
      'Повний доступ до залу',
      'Діє для студентів та школярів',
      'Вільні ваги, гантельний ряд, кардіо',
      'Зручний графік після навчання',
    ],
  },
];

export const TRAINERS_DATA: Trainer[] = [
  // Smila trainers
  {
    id: 'trainer-1',
    name: 'Олександр Кравченко',
    role: 'Старший тренер / Силовий тренінг',
    experience: '8 років досвіду',
    specialization: 'Силовий тренінг, реабілітація після травм, набір м\'язової маси',
    avatarPlaceholder: 'ОК',
    branch: 'smila',
    imageUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=80',
    instagramHandle: '@kravchenko_power',
    rating: 4.9,
    clientsCount: 85,
    achievements: [
      'Майстер спорту з пауерліфтингу України',
      'Підготував 20+ призерів обласних змагань',
      'Сертифікований нутриціолог та спортивний дієтолог',
    ],
  },
  {
    id: 'trainer-2',
    name: 'Аліна Гончарова',
    role: 'Фітнес-тренер / Схуднення & Тонус',
    experience: '5 років досвіду',
    specialization: 'Функціональний тренінг, TRX, стретчинг, корекція фігури',
    avatarPlaceholder: 'АГ',
    branch: 'smila',
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=700&q=80',
    instagramHandle: '@alina.fit.body',
    rating: 5.0,
    clientsCount: 140,
    achievements: [
      'Сертифікат міжнародної академії фітнесу IFA',
      'Автор програми безпечного жироспалювання',
      '150+ успішних трансформацій клієнтів у Смілі',
    ],
  },
  {
    id: 'trainer-3',
    name: 'Вікторія Лисенко',
    role: 'Реабілітація & Здорова спина',
    experience: '4 роки досвіду',
    specialization: 'Постава, зміцнення м\'язів кори, пілатес, відновлення після пологів',
    avatarPlaceholder: 'ВЛ',
    branch: 'smila',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80',
    instagramHandle: '@viktoria.rehab',
    rating: 4.95,
    clientsCount: 70,
    achievements: [
      'Диплом з фізичної реабілітації та кінезіотерапії',
      'Експерт з міофасціального релізу (MFR)',
      'Спеціаліст з усунення болю у спині та шиї',
    ],
  },

  // Zolotonosha trainers
  {
    id: 'trainer-4',
    name: 'Максим Шевчук',
    role: 'Старший тренер / Crossfit & Бокс',
    experience: '7 років досвіду',
    specialization: 'Витривалість, функціональні силові сети, боксерська підготовка',
    avatarPlaceholder: 'МШ',
    branch: 'zolo',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    instagramHandle: '@shevchuk_boxing',
    rating: 5.0,
    clientsCount: 110,
    achievements: [
      'Кандидат у майстри спорту з боксу',
      'Спеціаліст з кросфіту та інтервального тренінгу',
      'Головний тренер силового блоку 3:16 Золотоноша',
    ],
  },
  {
    id: 'trainer-5',
    name: 'Дмитро Бондаренко',
    role: 'Персональний тренер / Рельєф & Маса',
    experience: '6 років досвіду',
    specialization: 'Набір чистої м\'язової маси, сушка, оптимізація раціону',
    avatarPlaceholder: 'ДБ',
    branch: 'zolo',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80',
    instagramHandle: '@bondarenko_physique',
    rating: 4.9,
    clientsCount: 95,
    achievements: [
      'Призер змагань Men\'s Physique',
      'Індивідуальний підхід без ризику травм суглобів',
      'Спеціаліст з циклічного харчування та добавок',
    ],
  },
  {
    id: 'trainer-6',
    name: 'Анастасія Мельник',
    role: 'Жіночий фітнес & Стретчинг',
    experience: '5 років досвіду',
    specialization: 'Шпагат, гнучкість, кругові кардіо-тренування, рельєф пресу та сідниць',
    avatarPlaceholder: 'АМ',
    branch: 'zolo',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=80',
    instagramHandle: '@melnyk.stretching',
    rating: 5.0,
    clientsCount: 130,
    achievements: [
      'Сертифікований інструктор Stretching Pro',
      'Автор авторських курсів розтяжки та мобільності',
      'Організатор жіночих фітнес-інтенсивів у клубі',
    ],
  },
];

export interface ReviewItem {
  id: number;
  name: string;
  branchId: 'smila' | 'zolo';
  branchLabel: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export const REVIEWS_DATA: ReviewItem[] = [
  // Smila reviews
  {
    id: 1,
    name: 'Юлія Коваленко',
    branchId: 'smila',
    branchLabel: '3:16 GYM Сміла (@3.16gym)',
    rating: 5,
    date: '3 дні тому',
    text: 'Найкращий зал у Смілі! Займаюсь тут вже півроку на Героїв Небесної Сотні. Дуже чисто, нові якісні тренажери, дівчата на рецепції завжди привітні. Тренер Олександр допоміг скинути 9 кг!',
    verified: true,
  },
  {
    id: 2,
    name: 'Артем Дмитренко',
    branchId: 'smila',
    branchLabel: '3:16 GYM Сміла (@3.16gym)',
    rating: 5,
    date: 'Тиждень тому',
    text: 'Просторий зал 420 м², хороша кардіо-лінія, доріжки не скриплять і завжди вільні. Влітку кондиціонери працюють ідеально. Окремий респект за протеїновий бар з великим вибором смаків.',
    verified: true,
  },
  {
    id: 3,
    name: 'Аліна Черкасова',
    branchId: 'smila',
    branchLabel: '3:16 GYM Сміла (@3.16gym)',
    rating: 5,
    date: '2 тижні тому',
    text: 'Дуже зручний мобільний запис та чесні абонементи без прихованих платежів. Радує, що зал просторий і немає черг до тренажерів навіть у піковий вечірній час.',
    verified: true,
  },

  // Zolotonosha reviews
  {
    id: 4,
    name: 'Андрій Циганко',
    branchId: 'zolo',
    branchLabel: '3:16 GYM Золотоноша (@3.16zolo)',
    rating: 5,
    date: '4 дні тому',
    text: 'Круто, що в Золотоноші на Шевченка відкрився зал такого високого рівня. Багато вільної ваги, потужна вентиляція і завжди свіже повітря. Протеїнові шейки бомба!',
    verified: true,
  },
  {
    id: 5,
    name: 'Олена Волинець',
    branchId: 'zolo',
    branchLabel: '3:16 GYM Золотоноша (@3.16zolo)',
    rating: 5,
    date: 'Тиждень тому',
    text: 'Займаюсь з тренером Максимом вже два місяці. Зручне розташування прямо в центрі міста, є де припаркувати авто. Тренажери нові та дуже комфортні роздягальні з теплим душем.',
    verified: true,
  },
  {
    id: 6,
    name: 'Сергій Котляр',
    branchId: 'zolo',
    branchLabel: '3:16 GYM Золотоноша (@3.16zolo)',
    rating: 5,
    date: '2 тижні тому',
    text: 'Взяв річний безліміт і дуже задоволений. Зал 450 м², місця вистачає усім. Атмосфера спортивна та заряджає на результат з перших хвилин.',
    verified: true,
  },
];

export const GYM_ZONES: GymZoneItem[] = [
  {
    id: 'heavy',
    title: 'Зона вільних ваг та штанг',
    tag: 'Iron Area',
    desc: 'Гантельний ряд від 1 до 50 кг з кроком 2 кг, силові рами, лави для жиму та прогумовані помости для станової тяги.',
    metric: '50+ снарядів',
    imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    features: ['Гантелі 1-50 кг', '3 силові рами', 'Олімпійські грифи', 'Прогумовані диски'],
  },
  {
    id: 'cardio',
    title: 'Потужна кардіо-лінія',
    tag: 'Endurance Hub',
    desc: 'Бігові доріжки нового покоління з амортизацією суглобів, еліпсоїди, гребні тренажери та сайкли з моніторингом пульсу.',
    metric: '14 кардіо-станцій',
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80',
    features: ['Бігові доріжки Pro', 'Еліптичні тренажери', 'Концепт-гребля', 'Пульсометрія'],
  },
  {
    id: 'functional',
    title: 'CrossFit та функціональна зона',
    tag: 'Functional Zone',
    desc: 'TRX петлі, масивні плиобокси, канати для лазіння, гирі, медболи та амортизатори для високоінтенсивного інтервального тренінгу.',
    metric: 'До 15 людей',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    features: ['TRX-станція', 'Бойові канати', 'Пліобокси 50-75 см', 'Гирьовий ряд'],
  },
  {
    id: 'bar',
    title: 'Фітнес-бар та спортхарч',
    tag: 'Nutrition & Cafe',
    desc: 'Сироватковий ізолят, BCAA, ізотоніки, L-карнітин, пре-воркаути та натуральна зернова кава преміум-обсмажки.',
    metric: '30+ смаків',
    imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80',
    features: ['Преміум протеїн', 'BCAA та ізотоніки', 'Зернова свіжа кава', 'Енергетичні батончики'],
  },
];
