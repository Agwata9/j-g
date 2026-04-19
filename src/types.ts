export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Bedsheets' | 'Bathroom Mats' | 'Mattress Covers';
  image: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
