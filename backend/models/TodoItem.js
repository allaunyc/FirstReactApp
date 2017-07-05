import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoItemSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
});

const TodoItem = mongoose.model("Todo", todoItemSchema);

export default TodoItem;
