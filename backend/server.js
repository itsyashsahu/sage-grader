require('dotenv').config();
const prisma = require("./prisma/prismaClient");
const studentRouter = require("./routes/student");
const mentorRouter = require("./routes/mentor");
const marksRouter = require("./routes/marks");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "alive" });
});

app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

app.use("/api/student/", studentRouter);

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
