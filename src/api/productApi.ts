import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

// Fonction pour récupérer tous les produits
export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Fonction pour récupérer un produit par son ID
export const fetchProductById = async (id: string | number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
