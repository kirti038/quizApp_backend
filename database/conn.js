import mongoose from "mongoose";

export default async function connect() {
  try {
    const uri = process.env.ATLAS_URI;
    if (!uri) {
      throw new Error("MongoDB connection URI is missing in environment variables.");
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 8080, // Timeout after 5 seconds
    });

    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error("❌ Database Connection Error:", error.message);
    process.exit(1); // Exit process on failure
  }
}