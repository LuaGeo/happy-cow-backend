const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const axios = require("axios");

mongoose.connect(process.env.MONGODB_URI);

const restaurantsRoutes = require("./routes/restaurants");
app.use(restaurantsRoutes);

app.get("/favorites", (req, res) => {
  res.status(200).json({ message: "helloo i'm the favorites" });
});

app.all("*", function (req, res) {
  res.json({ message: "This route doesn't exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started ! ✨");
});