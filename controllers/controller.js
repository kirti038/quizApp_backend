import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import data from "../database/data.js";

/** Get all questions */
export async function getQuestions(req, res) {
  try {
    const questions = await Questions.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/** Insert all questions from data.js */
export async function insertQuestions(req, res) {
  try {
    const questionsArray = data.questions;
    await Questions.insertMany(questionsArray);
    res.json({ msg: "Data Saved Successfully...!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/** Delete all questions */
export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/** Get all results */
export async function getResult(req, res) {
  try {
    const results = await Results.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/** Save a new result */
export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username || !result) throw new Error("Username and Result are required.");

    await Results.create({ username, result, attempts, points, achieved });
    res.json({ msg: "Result Saved Successfully...!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/** Delete all results */
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Results Deleted Successfully...!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}