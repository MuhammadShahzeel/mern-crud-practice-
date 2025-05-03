import axios from "axios";

// Create Axios Instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

// Create Product
export const addProduct = (data) => {
  return api.post("/products", data);
};

// Get All Products
export const getProducts = () => {
  return api.get("/products");
};

// Delete Product
export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};

// Update Product
export const updateProduct = (id, data) => {
  return api.put(`/products/${id}`, data);
};     
