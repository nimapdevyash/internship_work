class CustomErr extends Error {
  constructor(message, statusCOde) {
    super(message);
    this.status = statusCOde;
    this.name = this.constructor.name;
  }
}

class SpecialCustomError extends CustomErr {
  constructor(message, status) {
    super(message, status);
  }
}

try {
  throw new CustomErr("some random error", 404);
} catch (err) {
  console.log(err);
}

try {
  throw new SpecialCustomError("jal jala hai jal jala", 304);
} catch (err) {
  console.log(err);
}
