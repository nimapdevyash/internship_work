import app from "./src/app";
import connectToDB from "./src/db";

connectToDB();

app.listen(3000, () => console.log("app is live on port : 3000"));
