import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const PRODUCTS: Product[] = [
  // Bedsheets
  {
    id: 'b1',
    name: 'Bedsheets (4 by 6)',
    price: 1400,
    category: 'Bedsheets',
    image: '/images/sheet_1.png',
    description: 'Premium striped bedsheets in all colours. Soft, breathable, and elegant. Size: 4 by 6.',
  },
  {
    id: 'b2',
    name: 'Bedsheets (5 by 6)',
    price: 1600,
    category: 'Bedsheets',
    image: '/images/sheet_2.png',
    description: 'Premium striped bedsheets in all colours. Soft, breathable, and elegant. Size: 5 by 6.',
  },
  {
    id: 'b3',
    name: 'Bedsheets (6 by 6)',
    price: 1800,
    category: 'Bedsheets',
    image: '/images/sheet_3.png',
    description: 'Premium striped bedsheets in all colours. Soft, breathable, and elegant. Size: 6 by 6.',
  },
  // Bathroom Mats
  {
    id: 'm-std',
    name: 'Standard Bathroom Mat',
    price: 800,
    category: 'Bathroom Mats',
    image: '/images/matt_1.png',
    description: 'Reliable and functional textured bathroom mat for everyday use.',
  },
  {
    id: 'm1',
    name: 'Premium Bathroom Mat',
    price: 1200,
    category: 'Bathroom Mats',
    image: '/images/matt_2.png',
    description: 'Soft and absorbent textured bathroom mat for a touch of luxury.',
  },
  {
    id: 'm-exe',
    name: 'Executive Bathroom Mat',
    price: 4000,
    category: 'Bathroom Mats',
    image: '/images/matt_3.png',
    description: 'The ultimate in bathroom luxury. Thick, plush, and extremely durable textured mat.',
  },
  // Mattress Covers
  {
    id: 'c1',
    name: 'Mattress Cover (4 by 6)',
    price: 1800,
    category: 'Mattress Covers',
    image: '/images/cover_1.png',
    description: 'Durable quilted mattress cover. Waterproof, soft, and protects your mattress. Size: 4 by 6.',
  },
  {
    id: 'c2',
    name: 'Mattress Cover (5 by 6)',
    price: 2200,
    category: 'Mattress Covers',
    image: '/images/cover_2.png',
    description: 'Durable quilted mattress cover. Waterproof, soft, and protects your mattress. Size: 5 by 6.',
  },
  {
    id: 'c3',
    name: 'Mattress Cover (6 by 6)',
    price: 2500,
    category: 'Mattress Covers',
    image: '/images/cover_3.png',
    description: 'Durable quilted mattress cover. Waterproof, soft, and protects your mattress. Size: 6 by 6.',
  },
];

export const WHATSAPP_NUMBER = '254721797277';
export const BUSINESS_NAME = 'J&G Fashions';
export const BUSINESS_TAGLINE = 'Beautify Your Home';
export const BUSINESS_LOCATION = 'Kiambu County, Kenya';