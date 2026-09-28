export type DeviceView = 'mobile' | 'tablet' | 'desktop' | 'fluid';
export type GymBranch = 'smila' | 'zolo';

export interface CountryCode {
  name: string;
  code: string;
  flag: string;
  mask: string;
  digitsCount: number;
  placeholder: string;
}

export interface PasswordCriteria {
  minLength: boolean;
  hasUpper: boolean;
  hasLower: boolean;
  hasNumber: boolean;
  hasSpecial: boolean;
}

export interface BranchInfo {
  id: GymBranch;
  name: string;
  city: string;
  address: string;
  instagram: string;
  instagramUrl: string;
  phone: string;
  workHoursWeekday: string;
  workHoursWeekend: string;
  area: string;
  mapCoords: string;
  imageUrl?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  popular?: boolean;
  timeLimit?: string;
  features: string[];
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  avatarPlaceholder: string;
  branch: 'both' | GymBranch;
  achievements: string[];
  imageUrl?: string;
  instagramHandle?: string;
  rating?: number;
  clientsCount?: number;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  branch: GymBranch;
  serviceType: string;
  trainerName?: string;
  email?: string;
  comment?: string;
}

export interface GymZoneItem {
  id: string;
  title: string;
  desc: string;
  metric: string;
  imageUrl: string;
  tag: string;
  features: string[];
}
