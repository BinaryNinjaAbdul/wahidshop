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

/***
 * @desc Create Product
 * @route POST /api/products
 * @access Private/Admin
 */

const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create({
    name: 'sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpeg',
    brand: 'sample brand',
    category: 'sample category',
    countInStock: 0,
    numeReviews: 0,
    description: 'Sample Description',
  });

  res.status(201).json(product);
});

export { getAllProducts, getProduct, createProduct };
