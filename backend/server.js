const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

const parseOrigins = (origins) =>
  String(origins || "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);

const allowedOrigins =
  parseOrigins(process.env.CORS_ORIGIN).length > 0
    ? parseOrigins(process.env.CORS_ORIGIN)
    : [
        "https://pitchsab.netlify.app",
        "http://localhost:5173",
        "http://localhost:5174",
      ];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"), false);
    },
  }),
);
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("Pitchsap API running");
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
