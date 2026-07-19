import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Removed deprecated options for a cleaner connection call
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;