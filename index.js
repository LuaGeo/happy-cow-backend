const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

const restaurantRoutes = require("./routes/restaurant");
app.use(restaurantRoutes);

const userRoutes = require("./routes/user");
app.use(userRoutes);

const favoriteRestaurantsRoutes = require("./routes/favoriteRestaurants");
app.use(favoriteRestaurantsRoutes);

app.get("/favorites", (req, res) => {
  res.status(200).json({ message: "helloo i'm the favorites" });
});

app.all("*", function (req, res) {
  res.json({ message: "This route doesn't exist" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started ! ✨");
});
