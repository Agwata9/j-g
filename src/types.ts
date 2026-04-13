export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Curtains' | 'Bedding' | 'Rugs';
  image: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
