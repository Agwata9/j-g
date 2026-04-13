import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Velvet Royal Curtains',
    price: 4500,
    category: 'Curtains',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800&auto=format&fit=crop',
    description: 'Luxurious velvet curtains that add a touch of elegance to any room.',
  },
  {
    id: '2',
    name: 'Egyptian Cotton Bedding Set',
    price: 8500,
    category: 'Bedding',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop',
    description: 'Ultra-soft Egyptian cotton bedding for the ultimate sleep experience.',
  },
  {
    id: '3',
    name: 'Hand-Woven Persian Rug',
    price: 12000,
    category: 'Rugs',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop',
    description: 'Intricately designed hand-woven rug with vibrant patterns.',
  },
  {
    id: '4',
    name: 'Sheer Linen Curtains',
    price: 3200,
    category: 'Curtains',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800&auto=format&fit=crop',
    description: 'Light and airy linen curtains perfect for a modern living space.',
  },
  {
    id: '5',
    name: 'Silk Pillowcase Set',
    price: 2500,
    category: 'Bedding',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop',
    description: 'Pure silk pillowcases that are gentle on your skin and hair.',
  },
  {
    id: '6',
    name: 'Modern Geometric Rug',
    price: 7800,
    category: 'Rugs',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?q=80&w=800&auto=format&fit=crop',
    description: 'A stylish geometric rug that complements contemporary interiors.',
  },
];

export const WHATSAPP_NUMBER = '254700000000'; // Placeholder, user can update
export const BUSINESS_NAME = 'J&G Fashions';
export const BUSINESS_TAGLINE = 'Beautify Your Home';
export const BUSINESS_LOCATION = 'Kiambu County, Kenya';
