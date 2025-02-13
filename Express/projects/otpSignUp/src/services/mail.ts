import nodemailer from "nodemailer";

async function sendMail(reciver) {
  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.GMAIL_ID,
        pass: process.env.GMAIL_PASS,
      },
    });

    const transport = {
      from: process.env.GMAIL_ID,
      to: reciver.email,
      subject: "OTP Verification",
      text: `your otp is ${reciver.otp}`,
    };

    await transporter.sendMail(transport);
  } catch (error) {
    console.log("error while sending mail : ", error);
  }
}

export default sendMail;
