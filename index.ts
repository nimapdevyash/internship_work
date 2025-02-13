import app from "./src/app";
import connectToDB from "./src/db";
import User from "./src/models/user.model";

connectToDB();

User.sync();

app.listen(3000, () => console.log("app is live on port : 3000"));
