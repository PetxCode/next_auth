import { connect } from "mongoose";

const url: string = "mongodb://127.0.0.1:27017/authDBClass";

export const dbConfig = async () => {
  try {
    await connect(url)
      .then(() => {
        console.log("connected ❤️❤️❤️");
      })
      .catch((error: Error) => {
        console.error(error);
      });
  } catch (error: any) {
    console.error(error);
  }
};
