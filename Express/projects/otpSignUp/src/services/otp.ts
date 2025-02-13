function generateOTP() {
  let otp = "";

  for (let i = 0; i < 6; i++) {
    let digit = Math.floor(Math.random() * 10);
    otp += digit;
  }
  return Number(otp);
}

export default generateOTP;
