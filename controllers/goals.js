import Goal from '../models/Goal.js';

// Goals CRUD Routes

// @desc Get all goals
// @route GET /api/v1/goals
// @access Public
export const getGoals = async (req, res, next) => {
  try {
    const goals = await Goal.find();

    res.status(200).json({ success: true, count: goals.length, data: goals });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc Get single goal
// @route GET /api/v1/goals/:id
// @access Public
export const getGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: goal });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc Create new goal
// @route POST /api/v1/goals
// @access Private
export const createGoal = async (req, res, next) => {
  try {
    const goal = await Goal.create(req.body);

    res.status(201).json({
      success: true,
      data: goal,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc Update goal
// @route PUT /api/v1/goals/:id
// @access Private
export const updateGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!goal) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: goal });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc Delete goal
// @route DELETE /api/v1/goals/:id
// @access Private
export const deleteGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);

    if (!goal) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};
