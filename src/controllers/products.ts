import { Request, Response } from "express";
import { z } from "zod";
import {
  createTodo,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  markDone,
} from "../db/todos";

const TodoSchema = z.object({
  title: z.string(),
});
export const getAllTodoController = async (req: Request, res: Response) => {
  try {
    const filter = req.query.filter || "";
    const todos = await getAllTodos(filter as string);
    if (!todos) {
      res.status(404).json({ message: "NO todos found" });
    }
    res.status(200).json({ todos });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

export const createTodoController = async (req: Request, res: Response) => {
  try {
    const validatedData = TodoSchema.safeParse(req.body);
    if (!validatedData.success) {
      return res.status(400).json({ message: "Invalid Input" });
    } else {
      const todoData = validatedData.data;
      const createdTdodos = await createTodo(todoData);
      return res.status(200).json({ message: createdTdodos });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

export const markAsDone = async (req: Request, res: Response) => {
  try {
    const todoId = req.params.id;
    const markAsDoneRes = await markDone(todoId);
    res.status(200).json({ markAsDoneRes });
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const todoId = req.params.id;
    const deleteTodo = await deleteTodoById(todoId);
    res.status(200).json({ message: "Todo deleted :", deleteTodo });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};
