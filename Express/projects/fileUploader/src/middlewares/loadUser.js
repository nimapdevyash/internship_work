import User from "../models/user.js";
import { verifyAcessToken } from "../services/jwt.js";

async function loadUser(req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        sucess: false,
        message: "invalid token",
      });
    }

    const decodedToken = verifyAcessToken(token);
    const userName = decodedToken.userName;

    if (!decodedToken) {
      return;
    }

    const user = await User.findOne({ where: { userName } });

    if (!user) {
      throw new Error("invalid user");
    }

    req.user = { userName: user.userName };

    next();
  } catch (error) {
    console.log("couldn't load the user ", error);
    return res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
}

export default loadUser;
