import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  isDone: {
    type: Boolean, // New field for task completion status
    default: false, // Set default value to false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const TodoModel = mongoose.model("Todo", TodoSchema);

export const getAllTodos = (filter: string) =>
  TodoModel.find({
    $or: [
      {
        title: {
          $regex: filter,
        },
      },
    ],
  });

export const getTodoById = (id: string) => TodoModel.findById(id);

export const createTodo = (value: Record<string, any>) =>
  TodoModel.create(value);

export const deleteTodoById = (id: string) =>
  TodoModel.findByIdAndDelete({ _id: id });

export const updateTodoById = (id: string, value: Record<string, any>) =>
  TodoModel.findByIdAndUpdate(id, value);
