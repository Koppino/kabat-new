import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import authRoutes from "./routes/auth.routes.js";
import koncertRoutes from "./routes/koncert.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cors from "cors";
import { app, server } from "./socket/socket.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const __dirname = path.resolve();
//
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//   res.send("root route");
// });

app.use("/api/auth", authRoutes);
app.use("/api/koncert", koncertRoutes);
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});
