import { createContext, useContext, useState } from "react";
import { addProduct } from "../api/ProductApi.js";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Create Product
  const createProduct = async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill all fields." };
    }

    try {
      const response = await addProduct(newProduct);
        
     

      const createdProduct = response.data.product;

      setProducts((prev) => [...prev, createdProduct]);
      return { success: true, message: "Product created successfully" };
    } catch (error) {
      console.error(error);
      return { success: false, message: "Server error" };
    }
  };



  return (
    <ProductContext.Provider value={{ products, createProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
    return useContext(ProductContext);
  };



