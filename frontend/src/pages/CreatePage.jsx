import  { useState } from 'react';
import { useProduct } from '../context/ProductContext';

function CreatePage() {
  const { createProduct } = useProduct();

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddProduct = async () => {
    const res = await createProduct(newProduct);

    if (res.success) {
      console.log(res.message);
      
      setNewProduct({ name: '', price: '', image: '' });
    } else {
      console.error(res.message);
    }
  };

  return (
    <div className="max-w-[1140px] px-4 mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Add New Product
      </h2>

      <div className="space-y-4 bg-gray-900 p-6 rounded-lg shadow-md">
        <input
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="border border-gray-700 p-2 w-full rounded-md bg-gray-800 text-white placeholder-gray-400"
        />
        <input
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Product Price"
          type="number"
          className="border border-gray-700 p-2 w-full rounded-md bg-gray-800 text-white placeholder-gray-400"
        />
        <input
          name="image"
          value={newProduct.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border border-gray-700 p-2 w-full rounded-md bg-gray-800 text-white placeholder-gray-400"
        />

        <button
          disabled={!newProduct.name || !newProduct.price || !newProduct.image}
          onClick={handleAddProduct}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md transition 
            bg-blue-600 hover:bg-blue-700 text-white 
            disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Add Product
        </button>
      </div>
    </div>
  );
}

export default CreatePage;
