import User from "../modules/user";
import sendMail from "../services/mail";
import generateOTP from "../services/otp";

// create
async function signUp(req, res) {
  try {
    const { userName, firstName, lastName, email, password } = req.body;

    console.log(userName, firstName, lastName, email, password);

    if (!userName || !firstName || !lastName || !email || !password) {
      return res.status(400).json({
        sucess: false,
        message: "insufficient credentials",
      });
    }

    let otp = generateOTP();

    if (!otp) {
      throw new Error("otp is not created");
    }

    await sendMail({ firstName, lastName, email, otp });

    const user = await User.create({
      userName,
      firstName,
      lastName,
      password,
      email,
      otp,
    });

    if (!user) {
      throw new Error("error while creating user");
    }

    res.status(201).json({
      sucess: true,
      message:
        "account created sucessfully , now verify account using otp sent on your emailId",
      verified: false,
    });
  } catch (error) {
    console.log("error while signing up");
    res.status(500).json({
      sucess: false,
      message: "error while creating user account",
      verified: false,
    });
  }
}

// verify otp
async function verifyOtp(req, res) {
  const otp = req.body.otp;
  const userName = req.body.userName;

  if (!otp) {
    return res.status(404).json({
      sucess: false,
      message: "otp is required",
    });
  }

  const user = await User.findOne({ where: { userName } });

  if (!user) {
    return res.status(404).json({
      sucess: false,
      message: `user with username ${userName} not found`,
    });
  }

  let userOtp = user?.otp;

  console.log("u otp : ", userOtp, " otp : ", otp);

  if (userOtp != otp) {
    return res.status(400).json({
      success: false,
      message: "invalid otp",
    });
  }

  user.verified = true;

  user?.reload();

  await user?.save();

  res.status(200).json({
    success: true,
    message: "user verification successfull",
  });
}

export { signUp, verifyOtp };
