import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const DB = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASS);
    const conn = await mongoose.connect(DB);
    console.log(`DB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
