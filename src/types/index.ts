export interface Festival {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  date: string; // ISO date string
  region: Region[];
  religion: Religion[];
  images: string[];
  videoUrl?: string;
  traditions: string[];
  foods: Food[];
  historicalContext: string;
}

export interface Food {
  name: string;
  description: string;
  imageUrl: string;
}

export type Region = 
  | 'North India' 
  | 'South India' 
  | 'East India' 
  | 'West India' 
  | 'Central India' 
  | 'Northeast India' 
  | 'Pan India';

export type Religion = 
  | 'Hindu' 
  | 'Muslim' 
  | 'Sikh' 
  | 'Christian' 
  | 'Jain' 
  | 'Buddhist' 
  | 'Secular';

export interface CalendarDay {
  date: Date;
  festivals: Festival[];
  isCurrentMonth: boolean;
  isToday: boolean;
}