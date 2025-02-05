import { createAcessToken, verifyAcessToken } from "../services/jwt.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

// create
async function createUser(req, res) {
  try {
    const { userName, firstName, lastName, password } = req.body;

    if (!userName || !firstName || !lastName || !password) {
      return res.status(404).json({
        sucess: false,
        message: "unsufficient credentials",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) {
      throw new Error("couldn't hash the password");
    }

    await User.create({
      firstName,
      lastName,
      userName,
      password: hashedPassword,
    });

    const user = await User.findOne({
      where: { userName },
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(500).json({
        sucess: false,
        message: "user not created",
      });
    }

    const token = createAcessToken({ userName: user.userName });

    return res
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        signedCookies: true,
      })
      .status(200)
      .json({
        sucess: true,
        message: "user created sucessfully",
        user,
        accessToken: token,
      });
  } catch (error) {
    console.log("error while creating user ", error);
    res.status(400).json({
      sucess: false,
      message: error?.errors[0]?.message || error.message,
    });
  }
}

// get current user
async function getCurrentUser(req, res) {
  try {
    const userName = req.user.userName;

    if (!userName) {
      return res.status(404).json({
        sucess: false,
        message: "login first",
      });
    }

    const user = await User.findOne({ where: { userName } });

    if (!user) {
      throw new Error("user with this userId does not exist");
    }

    return res.status(200).json({
      sucess: true,
      user: {
        fullName: user.firstName + " " + user.lastName,
        userName,
      },
      message: "current user details fetched sucessfully",
    });
  } catch (error) {
    console.log("error while fetching current user : ", error);
  }
}

// update
async function updateUser(req, res) {
  try {
    const { userName, firstName, lastName } = req.body;

    if (!userName || !firstName || !lastName) {
      return res.status(404).json({
        sucess: false,
        message: "unsufficient credentials, all feilds are required",
      });
    }

    const user = await User.findOne({ where: { userName } });

    if (!user) {
      return res.status(400).json({
        sucess: false,
        message: "user not found , invalid userName",
      });
    }

    user.firstName = firstName;
    user.lastName = lastName;

    await user.save();

    return res.status(200).json({
      sucess: true,
      message: "user updated sucessfully",
    });
  } catch (error) {
    console.log("couldn't update the user : ", error);
  }
}

// delete
async function deleteUser(req, res) {
  try {
    const userName = req.user.userName;

    const user = await User.findOne({ where: { userName } });

    if (!user) {
      return res.status(400).json({
        sucess: false,
        message: "user not found , invalid userName",
      });
    }

    await user.destroy();

    return res.clearCookie("token").status(200).json({
      sucess: true,
      message: "user deleted sucessfully",
    });
  } catch (error) {
    console.log("couldn't delete user ", error);
  }
}

// login
async function loginUser(req, res) {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.status(404).json({
        sucess: false,
        message: "unsufficient credentials",
      });
    }

    const user = await User.findOne({ where: { userName } });

    if (!user) {
      return res.status(400).json({
        sucess: false,
        message: "user not found , invalid userName",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({
        sucess: false,
        message: "icorrect password",
      });
    }

    const token = createAcessToken({ userName: user.userName });

    if (!token) {
      throw new Error("coldn't create acess-token");
    }

    return res
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        signedCookie: true,
      })
      .status(200)
      .json({
        sucess: true,
        message: "user loggedin sucessfully",
      });
  } catch (error) {
    console.log("couldn't login user ", error);
  }
}

// logout
async function logoutUser(req, res) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      throw new Error("acess-token isn't available");
    }

    const { userName } = verifyAcessToken(token);

    const user = User.findOne({ where: { userName } });

    if (!user) {
      return res.status(500).json({
        sucess: false,
        message: "user not found ",
      });
    }

    return res.clearCookie("token").status(200).json({
      sucess: true,
      message: "user loged out sucessfully",
    });
  } catch (error) {
    console.log("couldn't login user ", error);
  }
}

export {
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};
