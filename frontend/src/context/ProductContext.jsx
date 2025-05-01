import { createContext, useContext, useState,useCallback } from "react";
import { addProduct,deleteProduct,getProducts ,updateProduct} from "../api/ProductApi.js";
import { toast } from "react-toastify";



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
      toast.success("Product created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      
        theme: "dark",
      });
      return { success: true, message: "Product created successfully" };
    } catch (error) {
      toast.error("Failed to create product", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      
        theme: "dark",
      });
      console.error(error);
      return { success: false, message: "Server error" };
    }
};

  // Delete Product
  const removeProduct = async (id) => {
    try {
      const response = await deleteProduct(id);
      if (response.status === 200) {
        setProducts((prev) => prev.filter((product) => product._id !== id));
        toast.success("Product deleted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        return { success: true, message: "Product deleted successfully" };
      } else {
        toast.error("Failed to delete product", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
         console.error(response.data.message);
        return { success: false, message: "Failed to delete product" };
      }
    } catch (error) {
      console.error(error);
      return { success: false, message: "Server error" };
    }
  };

  const fetchProducts = useCallback(async () => {
    try {
      const response = await getProducts();
      if (response.status === 200) {
        const products = response.data.products;
        setProducts(products);
        return { success: true, message: "Products found" };
      } else {
        return { success: false, message: "Products not found" };
      }
    } catch (error) {
      console.error(error);
      return { success: false, message: "Server error" };
    }
  }, []);


  //update product

  const updateAProduct = async (id,newData) => {

    try {
      const response = await updateProduct(id,newData);
      if (response.status===200) {
        
        const updatedProduct = response.data.updatedProduct;
              setProducts((prev) => [...prev, updatedProduct]);
              toast.success("Product updated successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              
                theme: "dark",
              });
              return { success: true, message: "Product updated successfully" };

        
      }
        
      else {
        toast.error("Failed to update product", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        
          theme: "dark",
        });
        
        return { success: false, message: "Can't update" };

        
      }
     

      
    } catch (error) {
      
      console.error(error);
      return { success: false, message: "Server error" };
    }
};






  return (
    <ProductContext.Provider value={{ products, createProduct, removeProduct,fetchProducts,updateAProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
    return useContext(ProductContext);
  };



