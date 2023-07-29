import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import products from './data/products.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// DB config
connectDB();
// Express starting
const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

// Routes
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
