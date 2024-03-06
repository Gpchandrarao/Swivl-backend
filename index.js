const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotent = require("dotenv");

const userRoutes = require("./routes/userRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

dotent.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => {
    console.log("Connected MongoDB!");
  })
  .catch((error) => {
    console.log(`Error from MongooDB ${error}`);
  });

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
});

app.use("/users", userRoutes);
app.use("/recipes", recipeRoutes);
