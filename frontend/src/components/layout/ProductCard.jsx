import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 flex flex-col transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="h-48 w-full relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-bold">
          ${product.price}
        </div>
      </div>
      
      <div className="p-4 flex flex-col justify-between flex-1">
        <h2 className="text-lg font-semibold text-white mb-2 truncate">
          {product.name}
        </h2>
        
        <div className="flex space-x-2 mt-3">
          <button className="flex-1 flex items-center justify-center gap-1 py-2 rounded-md bg-green-600 hover:bg-green-700 text-sm text-white transition-colors">
            <FiEdit2 size={16} />
            <span>Edit</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-1 py-2 rounded-md bg-red-600 hover:bg-red-700 text-sm text-white transition-colors">
            <FiTrash2 size={16} />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;