const express = require("express");
require("dotenv").config();
require("colors");
const connectDB = require("./config/db");

const jobRouter = require("./routes/jobRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/v1/jobs", jobRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Application is running on port ${port}`.cyan);
});
