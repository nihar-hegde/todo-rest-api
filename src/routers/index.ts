import express from "express";
import todoRouter from "./todos";

const router = express.Router();

router.use("/todo", todoRouter);

export default router;
