import express, { Application } from "express";
import cors from "cors";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

const app: Application = express();
const port: number = 4455;

app.use(express.json());
app.use(cors({ origin: "*" }));

mainApp(app);

const server = app.listen(port, () => {
  console.clear();

  dbConfig();
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException: ", error);

  process.exit(0);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(0);
  });
});
