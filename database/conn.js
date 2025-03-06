import mongoose from "mongoose";

export default async function connect() {
  try {
    const uri = mongodb+srv://quiz_123:quiz123@quiz.zz76k.mongodb.net/?retryWrites=true&w=majority&appName=Quiz;
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
