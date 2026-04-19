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
    image: 'https://images.unsplash.com/photo-1629949009765-40f34d9f39ed?q=80&w=800&auto=format&fit=crop',
    description: 'Premium striped bedsheets in all colours. Soft, breathable, and elegant. Size: 4 by 6.',
  },
  {
    id: 'b2',
    name: 'Bedsheets (5 by 6)',
    price: 1600,
    category: 'Bedsheets',
    image: 'https://images.unsplash.com/photo-1505693419173-42b9256a0975?q=80&w=800&auto=format&fit=crop',
    description: 'Premium striped bedsheets in all colours. Soft, breathable, and elegant. Size: 5 by 6.',
  },
  {
    id: 'b3',
    name: 'Bedsheets (6 by 6)',
    price: 1800,
    category: 'Bedsheets',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop',
    description: 'Premium striped bedsheets in all colours. Soft, breathable, and elegant. Size: 6 by 6.',
  },
  // Bathroom Mats
  {
    id: 'm-std',
    name: 'Standard Bathroom Mat',
    price: 800,
    category: 'Bathroom Mats',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=800&auto=format&fit=crop',
    description: 'Reliable and functional textured bathroom mat for everyday use.',
  },
  {
    id: 'm1',
    name: 'Premium Bathroom Mat',
    price: 1200,
    category: 'Bathroom Mats',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    description: 'Soft and absorbent textured bathroom mat for a touch of luxury.',
  },
  {
    id: 'm-exe',
    name: 'Executive Bathroom Mat',
    price: 4000,
    category: 'Bathroom Mats',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop',
    description: 'The ultimate in bathroom luxury. Thick, plush, and extremely durable textured mat.',
  },
  // Mattress Covers
  {
    id: 'c1',
    name: 'Mattress Cover (4 by 6)',
    price: 1800,
    category: 'Mattress Covers',
    image: 'https://images.unsplash.com/photo-1632624035852-984452d8635a?q=80&w=800&auto=format&fit=crop',
    description: 'Durable quilted mattress cover. Waterproof, soft, and protects your mattress. Size: 4 by 6.',
  },
  {
    id: 'c2',
    name: 'Mattress Cover (5 by 6)',
    price: 2200,
    category: 'Mattress Covers',
    image: 'https://images.unsplash.com/photo-1632624035852-984452d8635a?q=80&w=800&auto=format&fit=crop',
    description: 'Durable quilted mattress cover. Waterproof, soft, and protects your mattress. Size: 5 by 6.',
  },
  {
    id: 'c3',
    name: 'Mattress Cover (6 by 6)',
    price: 2500,
    category: 'Mattress Covers',
    image: 'https://images.unsplash.com/photo-1632624035852-984452d8635a?q=80&w=800&auto=format&fit=crop',
    description: 'Durable quilted mattress cover. Waterproof, soft, and protects your mattress. Size: 6 by 6.',
  },
];

export const WHATSAPP_NUMBER = '254700000000'; // Placeholder, user can update
export const BUSINESS_NAME = 'J&G Fashions';
export const BUSINESS_TAGLINE = 'Beautify Your Home';
export const BUSINESS_LOCATION = 'Kiambu County, Kenya';
