import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

// Get all Products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Get Product by ID
export const fetchProductById = async (id: string | number) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  };