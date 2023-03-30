require("dotenv").config();
import express, { Request, Response, Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import { usersRouter } from "./routes/users";

const app: Application = express();

mongoose.connect(`${process.env.MONGODB_URI}/users-express`);

app.use(cors());
app.use(morgan("dev"));

app.use(usersRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(400).json("Route inconnue");
});

app.listen(process.env.PORT, () => {
  console.log("server has started");
});
