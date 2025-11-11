import express from "express";
import {
  getUserWorkouts,
  addWorkoutToUser,
  markWorkoutCompleted,
  deleteWorkoutFromUser,
} from "../controllers/userWorkouts.js";

const router = express.Router();

// get workouts for a specific user
router.get("/userWorkouts/:userId", getUserWorkouts);
// add a workout to a user
router.post("/userWorkouts", addWorkoutToUser);
// mark a workout as completed
router.put("/userWorkouts/complete", markWorkoutCompleted);
// delete a workout from a user
router.delete("/userWorkouts/:userId/:exerciseId", deleteWorkoutFromUser)

export default router;
