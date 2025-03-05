import mongoose from "mongoose";
const { Schema } = mongoose;

const resultSchema = new Schema({
  username: { type: String, required: true },
  result: { type: Array, default: [] }, // Array of user's answers
  attempts: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  achieved: { type: String, default: "" }, // Fixed typo: "achived" -> "achieved"
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Result", resultSchema);