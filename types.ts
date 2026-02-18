
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  specs: string[];
}

export interface SpecRow {
  label: string;
  svl: string;
  gateway: string;
  ppulse: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
