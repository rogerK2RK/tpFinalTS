export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    category: {
      id: number;
      name: string;
    };
  }
  