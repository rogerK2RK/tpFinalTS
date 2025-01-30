import { create } from 'zustand';
import { Product } from '../types/Product';
import axios from 'axios';

interface ProductStore {
  products: Product[];
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  
  fetchProducts: async () => {
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
      console.log("Réponse API:", response.data); 
      set({ products: response.data });
    } catch (error) {
      console.error('Erreur lors de la récupération des produits', error);
    }
  }
}));
