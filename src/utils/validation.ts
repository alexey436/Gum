import { CountryCode, PasswordCriteria } from '../types';

export const SUPPORTED_COUNTRIES: CountryCode[] = [
  {
    name: 'Україна',
    code: '+380',
    flag: '🇺🇦',
    mask: '+380 (XX) XXX-XX-XX',
    digitsCount: 9, // 9 digits after +380
    placeholder: '(50) 123-45-67',
  },
  {
    name: 'Польща',
    code: '+48',
    flag: '🇵🇱',
    mask: '+48 XXX XXX XXX',
    digitsCount: 9,
    placeholder: '123 456 789',
  },
  {
    name: 'Німеччина',
    code: '+49',
    flag: '🇩🇪',
    mask: '+49 XXXX XXXXXX',
    digitsCount: 10,
    placeholder: '1512 345678',
  },
  {
    name: 'США / Канада',
    code: '+1',
    flag: '🇺🇸',
    mask: '+1 (XXX) XXX-XXXX',
    digitsCount: 10,
    placeholder: '(555) 123-4567',
  },
  {
    name: 'Велика Британія',
    code: '+44',
    flag: '🇬🇧',
    mask: '+44 XXXX XXXXXX',
    digitsCount: 10,
    placeholder: '7911 123456',
  },
];

/**
 * Strips everything except digits
 */
export function extractDigits(value: string): string {
  return value.replace(/\D/g, '');
}

/**
 * Format raw digits according to a specific country mask
 */
export function formatPhoneNumber(rawDigits: string, country: CountryCode): string {
  // Extract country dial code digits
  const countryDigits = extractDigits(country.code);
  let localDigits = rawDigits;

  // If user pasted or typed full number including country code, trim it
  if (localDigits.startsWith(countryDigits)) {
    localDigits = localDigits.slice(countryDigits.length);
  }

  // Restrict to max digits
  localDigits = localDigits.slice(0, country.digitsCount);

  // Specific format for Ukraine
  if (country.code === '+380') {
    let res = '';
    if (localDigits.length > 0) {
      res += '(' + localDigits.slice(0, 2);
    }
    if (localDigits.length >= 2) {
      res += ') ';
    }
    if (localDigits.length > 2) {
      res += localDigits.slice(2, 5);
    }
    if (localDigits.length >= 5) {
      res += '-';
    }
    if (localDigits.length > 5) {
      res += localDigits.slice(5, 7);
    }
    if (localDigits.length >= 7) {
      res += '-';
    }
    if (localDigits.length > 7) {
      res += localDigits.slice(7, 9);
    }
    return res;
  }

  // Format for Poland (+48)
  if (country.code === '+48') {
    const parts = [];
    if (localDigits.length > 0) parts.push(localDigits.slice(0, 3));
    if (localDigits.length > 3) parts.push(localDigits.slice(3, 6));
    if (localDigits.length > 6) parts.push(localDigits.slice(6, 9));
    return parts.join(' ');
  }

  // Format for USA (+1)
  if (country.code === '+1') {
    let res = '';
    if (localDigits.length > 0) res += '(' + localDigits.slice(0, 3);
    if (localDigits.length >= 3) res += ') ';
    if (localDigits.length > 3) res += localDigits.slice(3, 6);
    if (localDigits.length >= 6) res += '-';
    if (localDigits.length > 6) res += localDigits.slice(6, 10);
    return res;
  }

  // Generic chunk formatting (e.g. 4 + 6 digits)
  if (localDigits.length <= 4) {
    return localDigits;
  }
  return `${localDigits.slice(0, 4)} ${localDigits.slice(4)}`;
}

/**
 * Validates phone number based on strict digit count
 */
export function validatePhone(
  formattedOrRaw: string,
  country: CountryCode
): { isValid: boolean; error: string | null; digitsLeft: number } {
  const digits = extractDigits(formattedOrRaw);
  const countryDigits = extractDigits(country.code);
  let localDigits = digits;

  if (localDigits.startsWith(countryDigits)) {
    localDigits = localDigits.slice(countryDigits.length);
  }

  const currentCount = localDigits.length;
  const needed = country.digitsCount;

  if (currentCount === 0) {
    return {
      isValid: false,
      error: "Номер телефону обов'язковий",
      digitsLeft: needed,
    };
  }

  if (currentCount < needed) {
    const remaining = needed - currentCount;
    return {
      isValid: false,
      error: `Не вистачає ще ${remaining} ${getDigitDeclension(remaining)} (потрібно ${needed})`,
      digitsLeft: remaining,
    };
  }

  if (currentCount > needed) {
    return {
      isValid: false,
      error: `Забагато цифр: введено ${currentCount}, норма — ${needed}`,
      digitsLeft: 0,
    };
  }

  return { isValid: true, error: null, digitsLeft: 0 };
}

function getDigitDeclension(count: number): string {
  if (count === 1) return 'цифри';
  if (count >= 2 && count <= 4) return 'цифри';
  return 'цифр';
}

/**
 * KeyDown guard to prevent entering letters or non-numeric characters
 */
export function handlePhoneKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
  // Allow navigation keys, backspace, delete, tab, arrows
  const allowedKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Home',
    'End',
  ];

  // Allow copy/paste/select-all combos (Ctrl+A, Ctrl+C, Ctrl+V, etc.)
  if (e.ctrlKey || e.metaKey) {
    return;
  }

  if (allowedKeys.includes(e.key)) {
    return;
  }

  // If not a digit, block it instantly!
  if (!/^[0-9]$/.test(e.key)) {
    e.preventDefault();
  }
}

/**
 * Strict Email validation with domain zone check
 */
export function validateEmail(email: string): { isValid: boolean; error: string | null } {
  const trimmed = email.trim();
  if (!trimmed) {
    return { isValid: false, error: "Електронна пошта обов'язкова" };
  }

  if (!trimmed.includes('@')) {
    return { isValid: false, error: 'Відсутній символ "@" в адресі пошти' };
  }

  const parts = trimmed.split('@');
  if (parts.length !== 2) {
    return { isValid: false, error: 'Адреса повинна містити тільки один символ "@"' };
  }

  const [localPart, domainPart] = parts;
  if (!localPart || localPart.length < 1) {
    return { isValid: false, error: 'Вкажіть ім\'я користувача перед "@"' };
  }

  if (!domainPart || !domainPart.includes('.')) {
    return { isValid: false, error: 'Вкажіть коректну доменну зону (наприклад, .ua, .com)' };
  }

  const domainParts = domainPart.split('.');
  const tld = domainParts[domainParts.length - 1];

  if (!tld || tld.length < 2) {
    return { isValid: false, error: 'Доменна зона має складатись щонайменше з 2 символів (наприклад, .ua, .com)' };
  }

  // Standard email regex check
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  if (!emailRegex.test(trimmed)) {
    return { isValid: false, error: 'Некоректний формат електронної пошти' };
  }

  return { isValid: true, error: null };
}

/**
 * Password validation criteria check
 */
export function checkPasswordCriteria(password: string): PasswordCriteria {
  return {
    minLength: password.length >= 8,
    hasUpper: /[A-ZА-ЯІЇЄ]/.test(password),
    hasLower: /[a-zа-яіїє]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[^A-Za-z0-9А-Яа-яІіЇїЄє]/.test(password),
  };
}

export function evaluatePasswordStrength(password: string): {
  score: number; // 0 to 4
  label: string;
  color: string;
  criteria: PasswordCriteria;
  isValid: boolean;
} {
  const criteria = checkPasswordCriteria(password);
  let score = 0;

  if (criteria.minLength) score += 1;
  if (criteria.hasUpper) score += 1;
  if (criteria.hasLower) score += 1;
  if (criteria.hasNumber) score += 1;

  const isValid = criteria.minLength && criteria.hasUpper && criteria.hasLower && criteria.hasNumber;

  let label = 'Занадто простий';
  let color = 'bg-rose-500 text-rose-700';

  if (score === 2) {
    label = 'Слабкий';
    color = 'bg-amber-500 text-amber-700';
  } else if (score === 3) {
    label = 'Середній';
    color = 'bg-yellow-500 text-yellow-700';
  } else if (score === 4) {
    label = criteria.hasSpecial ? 'Бездоганний' : 'Надійний';
    color = 'bg-emerald-500 text-emerald-700';
  }

  return { score, label, color, criteria, isValid };
}

/**
 * Name validator
 */
export function validateName(name: string): { isValid: boolean; error: string | null } {
  const trimmed = name.trim();
  if (!trimmed) {
    return { isValid: false, error: "Вкажіть ваше ім'я" };
  }
  if (trimmed.length < 2) {
    return { isValid: false, error: "Ім'я повинно містити не менше 2 символів" };
  }
  if (!/^[a-zA-Zа-яА-ЯІіЇїЄєҐґ'\s-]+$/.test(trimmed)) {
    return { isValid: false, error: "Ім'я може містити лише літери та дефіс" };
  }
  return { isValid: true, error: null };
}
