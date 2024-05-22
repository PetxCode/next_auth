import { Document, Schema, model } from "mongoose";
import { iUser } from "../utils/interfaces";

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
