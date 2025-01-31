import { create } from "zustand";
import axios from "axios";
import { Product } from "../types/Product";

interface ProductStore {
  products: Product[];
  fetchProducts: () => Promise<void>;
  fetchProductsByCategory: (categoryId: string) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],

  // Récupérer tous les produits
  fetchProducts: async () => {
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/products");
      set({ products: response.data });
    } catch (error) {
      console.error("Erreur lors de la récupération des produits", error);
    }
  },

  // Récupérer les produits d'une **catégorie spécifique**
  fetchProductsByCategory: async (categoryId) => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
      );
      set({ products: response.data });
    } catch (error) {
      console.error("Erreur lors de la récupération des produits par catégorie", error);
    }
  },
}));
