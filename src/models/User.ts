import { Schema, model, Document } from "mongoose";

export interface UserProps {
  fullName: string;
  city: string;
  age: number;
  avatar: string;
}

export interface UserModel extends UserProps, Document {}

const userSchema = new Schema<UserProps>({
  fullName: { type: String, required: true },
  city: { type: String, required: true },
  age: { type: Number, required: true },
  avatar: { type: String, required: true },
});

export const User = model<UserModel>("User", userSchema);
