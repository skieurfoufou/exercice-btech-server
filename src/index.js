const express = require("express");
const cors = require("cors");
const app = express();

const env = require("./utils/env");
const db = require("./data-layer/db");
const userRouter = require("./routes/user.router");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to API btech-server" });
});

// app.all("/healthz", (req, res) => {
//   res.status(200).send();
// });

// Routers
app.use("/users", userRouter);

app.listen(env.PORT, async () => {
  await db.connect();
  console.log(`Server is running on port ${env.PORT}.`);
});
