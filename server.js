import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import CORS middleware
import connect from "./database/conn.js"; // Correct import with `.js`
import router from "./router/route.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes

// Routes
app.use("/api", router);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connect(); // Connect to MongoDB
});