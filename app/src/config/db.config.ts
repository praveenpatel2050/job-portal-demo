import mongoose from 'mongoose';
const connectionString = 'mongodb://localhost:27017/job-portal';

export const dbConnect = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to database');
  } catch (error) {
    console.log(error);
  }
};
