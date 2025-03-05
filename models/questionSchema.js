import mongoose from "mongoose";
const { Schema } = mongoose;

const questionSchema = new Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true }, // Array of strings
  correctAnswer: { type: Number, required: true }, // Index of the correct answer
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Question", questionSchema);