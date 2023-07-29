import Product from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

/***
 * @desc Fetch all products
 * @route GET /api/products
 * @access Public
 */

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

/***
 * @desc Fetch all products
 * @route GET /api/products/:id
 * @access Public
 */

const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.json(product);
});

export { getAllProducts, getProduct };
