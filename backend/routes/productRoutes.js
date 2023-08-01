import express from 'express';
import {
  getAllProducts,
  getProduct,
  createProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getAllProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProduct);

export default router;
