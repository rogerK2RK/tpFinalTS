import { create } from 'zustand';
import { Category } from '../types/Category';
import axios from 'axios';

interface CategoryStore {
categorys: Category[];
  fetchProducts: () => Promise<void>;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categorys: [],
  
  fetchProducts: async () => {
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
      console.log("Réponse API:", response.data); 
      set({ categorys: response.data });
    } catch (error) {
      console.error('Erreur lors de la récupération des produits', error);
    }
  }
}));
