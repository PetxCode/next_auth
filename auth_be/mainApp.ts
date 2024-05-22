import { Application } from "express";
import user from "./router/userRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/api", user);
  } catch (error) {
    console.error(error);
  }
};
