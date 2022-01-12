import express from "express";
import mongoose from "mongoose";
import { resolve } from "path";
import User from "./schemas/User";

const app = express();
app.use(express.json());

/*mongoose.connect(
  "mongodb://admin:password@localhost:27017/dev-skills?connectTimeoutMS=1000&authSource=admin"
);*/

app.get("/", (request, response) => {
  return response.sendFile(resolve(__dirname, "views", "index.html"));
});
/*
app.post("/users", async (request, response) => {
  const { name, techs } = request.body;
  if (!request.body) {
    return response.status(400).json({ error: "No user info provided" });
  }

  const userExists = await User.findOne({ name });
  if (userExists) {
    return response.status(403).json({ error: "User already exists" });
  }

  const user = await User.create({
    name,
    techs,
  });

  return response.json(user);
});

app.get("/users", async (request, response) => {
  const users = await User.find();
  return response.json(users);
});
*/
app.listen(3333, () => console.log("Listening to 3333"));
