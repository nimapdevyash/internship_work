import type { Response, Request } from "express";
import User from "../models/user.model";

// create
async function createUser(req: Request, res: Response): Promise<any> {
  try {
    const { userName, firstName, lastName, password } = req.body;

    if (!userName || !firstName || !lastName || !password) {
      return res.status(404).json({
        sucess: false,
        message: "all feilds are required",
      });
    }

    const user = await User.create({ firstName, lastName, userName, password });

    if (!user) {
      throw new Error("user creation failed");
    }

    res.status(201).json({
      sucess: true,
      message: "usr created sucessfully...",
      user,
    });
  } catch (error) {
    console.log("error while creating user : ", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// read
async function getUserByUserName(req: Request, res: Response): Promise<any> {
  try {
    const userName: string = req.params.userName;

    if (!userName) {
      return res.status(404).json({
        sucess: false,
        message: "userName required",
      });
    }

    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(404).json({
        sucess: false,
        message: "user not found",
      });
    }

    return res.status(200).json({
      sucess: true,
      message: "user fetched sucessfully",
      user,
    });
  } catch (error) {
    console.log("error while fetching user : ", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// update
async function updateUser(req: Request, res: Response): Promise<any> {
  try {
    const userName = req.params.userName;

    const { firstName, lastName } = req.body;

    if (!userName || !firstName || !lastName) {
      return res.status(404).json({
        sucess: true,
        message: "all credentials are required",
      });
    }

    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(404).json({
        Sucess: false,
        message: "user not found",
      });
    }

    user.firstName = firstName;
    user.lastName = lastName;

    await user.save();

    const updatedUser = await User.findOne({ userName });

    return res.status(200).json({
      sucess: true,
      message: "user updated sucessfully",
      updatedUser,
    });
  } catch (error) {
    console.log("error while updating user : ", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// delete
async function deleteUser(req: Request, res: Response): Promise<any> {
  try {
    const userName = req.params.userName;

    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(404).json({
        Sucess: false,
        message: "user not found",
      });
    }

    await user.destroy();

    return res.status(200).json({
      sucess: true,
      message: "user deleted sucessfully",
    });
  } catch (error) {
    console.log("error while deleting user : ", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export { createUser, updateUser, getUserByUserName, deleteUser };
