import { Router } from "express";
const router = Router();

/** Import controllers */
import * as controller from "../controllers/controller.js";

/** Questions Routes */
router
  .route("/questions")
  .get(controller.getQuestions) // GET all questions
  .post(controller.insertQuestions) // POST new questions
  .delete(controller.dropQuestions); // DELETE all questions

/** Results Routes */
router
  .route("/results")
  .get(controller.getResult) // GET all results
  .post(controller.storeResult) // POST a new result
  .delete(controller.dropResult); // DELETE all results

export default router;