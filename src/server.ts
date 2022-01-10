import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", (request, response) => {
  return response.sendFile(resolve(__dirname, "views", "index.html"));
});

app.post("/users", (request, response) => {});

app.get("/users", (request, response) => {});

app.listen(3333, () => console.log("Listening to 3333"));
