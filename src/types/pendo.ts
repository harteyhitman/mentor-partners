// types/pendo.ts
export interface PendoSection {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  slug: string;
  colorVariant?: 'primary' | 'secondary' | 'accent' | 'highlight' | 'info' | 'success';
}