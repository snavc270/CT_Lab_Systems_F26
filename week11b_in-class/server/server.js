import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let messages = [{ text: "first post!" }];

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
