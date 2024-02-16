import express from "express";
import {
  createTodoController,
  deleteTodo,
  getAllTodoController,
} from "../controllers/products";

const todoRouter = express.Router();

todoRouter.get("/all-todos", getAllTodoController);
todoRouter.delete("/deleteTodo/:id", deleteTodo);
todoRouter.post("/createTodo", createTodoController);

export default todoRouter;
