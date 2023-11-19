import mongoose from 'mongoose';

const GoalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a goal name'],
    unique: true,
    trim: true,
    maxLength: [20, 'Goal name can not be more than 20 characters'],
  },
  priority: {
    type: [String],
    required: true,
    enum: ['Low', 'Medium', 'High'],
  },
  status: {
    type: [String],
    required: true,
    enum: ['Pending', 'In Progress', 'Completed'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Goal', GoalSchema);
