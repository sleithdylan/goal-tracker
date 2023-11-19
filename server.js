import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import goals from './routes/goals.js';
import connectDb from './lib/db.js';

// Load environment variables
dotenv.config();

// Connect to database
connectDb();

// Initialize Express
const app = express();

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/v1/goals', goals);

// Port
const PORT = process.env.PORT || 5000;

// Listen for requests
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
