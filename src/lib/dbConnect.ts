import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  if (MONGODB_URI) {
    try {
      const opts = {
        bufferCommands: false,
      };
      const conn = await mongoose.connect(MONGODB_URI, opts);
      console.log("Connected to MongoDB");
      return conn;
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      // Handle the error, e.g., log it, display an error message, or fallback to a degraded mode.
      return null; // Or return a mock database connection if needed
    }
  } else {
    console.warn("MONGODB_URI not found. Skipping database connection.");
    return null; // Or return a mock database connection if needed
  }
}

export default dbConnect;