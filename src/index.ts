import express, { Request, Response, Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import { usersRouter } from "./routes/users";

const app: Application = express();
const port = 3001;

mongoose.connect("mongodb://localhost:27017/users-express");

app.use(cors());
app.use(morgan("dev"));

app.use(usersRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(400).json("Route inconnue");
});

app.listen(port, () => {
  console.log("server has started");
});
