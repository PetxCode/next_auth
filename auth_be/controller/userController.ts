import { Request, Response } from "express";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";

export const createAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await userModel.create({ name, email, password: hash });

    return res.status(201).json({
      status: 201,
      message: `user created successfully`,
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};

export const signInAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      const passwordCheck = await bcrypt.compare(password, user.password);

      if (passwordCheck) {
        if (user.verify) {
          return res.status(201).json({
            status: 201,
            message: `user created successfully`,
            data: user,
          });
        } else {
          return res.status(404).json({
            status: 404,
            message: "Please go an Verify your account",
          });
        }
      } else {
        return res.status(404).json({
          status: 404,
          message: "Password is incorrect",
        });
      }
    } else {
      return res.status(404).json({
        status: 404,
        message: "No user with this Email",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};

export const verifyAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;

    const user = await userModel.findByIdAndUpdate(
      userID,
      {
        verify: true,
      },
      { new: true }
    );

    return res.status(201).json({
      status: 201,
      message: `user account verify successfully`,
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};

export const viewOneAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;

    const user = await userModel.findById(userID);

    return res.status(200).json({
      status: 200,
      message: `view user successfully`,
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};

export const viewAllAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await userModel.find();

    return res.status(200).json({
      status: 200,
      message: `view users successfully`,
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};

export const checkAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
      return res.status(200).json({
        status: 200,
        message: `view users successfully`,
        data: user,
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: "error",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};
