import express, { Request, Response } from "express";
import { faker } from "@faker-js/faker";
import { User, UserProps } from "../models/User";

const router = express.Router();

router.get("/user", async (req: Request, res: Response) => {
  try {
    // const users = await User.find({});
    // const countUsers = await User.countDocuments({});
    // ou bien faire :
    const [users, countUsers] = await Promise.all([
      User.find({}),
      User.countDocuments({}),
    ]);
    res.status(200).json({ users: users, count: countUsers });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/user", async (req: Request, res: Response) => {
  try {
    const userObject: UserProps = {
      fullName: faker.name.firstName() + " " + faker.name.lastName(),
      city: faker.address.city(),
      age: faker.datatype.number({ min: 18, max: 80 }),
      avatar: faker.image.avatar(),
    };
    const newUser = await User.create(userObject);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/user", async (req: Request, res: Response) => {
  try {
    const deleteAll = await User.deleteMany({});
    res.status(200).json(deleteAll);
  } catch (error) {
    res.status(400).json(error);
  }
});

export { router as usersRouter };
