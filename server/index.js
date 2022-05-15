import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => {
    console.log(error.message);
  });

app.get("/", (req, res) => res.send("Hello From Server!"));
app.get("/about", (req, res) => res.send("Hello From About Page."));
