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

/***
 * @desc Update Product
 * @route PUT /api/products/:id
 * @access Private/Admin
 */

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
