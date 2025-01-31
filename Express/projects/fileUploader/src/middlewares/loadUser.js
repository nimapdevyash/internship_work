import User from "../models/user.js";
import { verifyAcessToken } from "../services/jwt.js";

function loadUser(req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        sucess: false,
        message: "invalid token",
      });
    }

    const decodedToken = verifyAcessToken(token);

    if (!decodedToken) {
      return;
    }

    const user = User.findOne(decodedToken);

    if (!user) {
      throw new Error("invalid user");
    }

    req.user = { userName: user.userName };

    next();
  } catch (error) {
    console.log("couldn't load the user ", error);
    return res.redirect("/login");
  }
}

export default loadUser;
