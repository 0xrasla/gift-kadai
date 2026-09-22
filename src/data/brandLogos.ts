export interface BrandLogo {
  id: string;
  name: string;
  tagline: string;
  badgeType: 'stamp' | 'script' | 'icon';
}

export const BRAND_LOGOS: BrandLogo[] = [
  { id: 'brand-1', name: 'Candy Bar', tagline: 'CANDY BAR', badgeType: 'script' },
  { id: 'brand-2', name: 'Sweet Kid', tagline: 'SWEET KID • BABY STORE', badgeType: 'stamp' },
  { id: 'brand-3', name: 'Candy Shop', tagline: 'CANDY SHOP', badgeType: 'icon' },
  { id: 'brand-4', name: 'Sweet Bar', tagline: 'SWEET BAR • TOYS', badgeType: 'stamp' },
  { id: 'brand-5', name: 'Sweet Shop', tagline: 'SWEET SHOP • GIFTS', badgeType: 'icon' },
];
