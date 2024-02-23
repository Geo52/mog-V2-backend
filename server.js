const workoutRoutes = require("./routes/workouts");
const express = require("express");
require("dotenv").config();
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// would rather it say home instead of api
app.use("/api/workouts", workoutRoutes);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
