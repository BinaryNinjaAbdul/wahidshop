import express from 'express';
const router = express.Router();

import Product from '../models/productModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    res.json(product);
  })
);

export default router;
