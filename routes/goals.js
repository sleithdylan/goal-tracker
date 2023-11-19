import express from 'express';
const router = express.Router();

// Import Controllers
import {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goals.js';

// Attach Controllers to Routes
router.route('/').get(getGoals).post(createGoal);

router.route('/:id').get(getGoal).put(updateGoal).delete(deleteGoal);

// Export router
export default router;
