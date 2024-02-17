import express from "express";
import {
  createTodoController,
  deleteTodo,
  getAllTodoController,
  markAsDone,
} from "../controllers/products";

const todoRouter = express.Router();

todoRouter.get("/all-todos", getAllTodoController);
todoRouter.delete("/deleteTodo/:id", deleteTodo);
todoRouter.post("/createTodo", createTodoController);
todoRouter.put("/markAsDone/:id", markAsDone);

export default todoRouter;
