import Product from '../models/product.model.js';
import mongoose from 'mongoose';

// Create a new product
const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, message: 'Provide all fields' });
  }
  try {
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json({ success: true, message: 'Product created', product: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      return res.status(404).json({ success: false, message: 'Products not found' });
    }
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: 'Invalid product ID' });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true
    });
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, message: 'Product updated', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Export all controllers together
export {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct
};
