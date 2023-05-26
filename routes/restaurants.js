const express = require("express");
const router = express.Router();
const Restaurants = require("../models/Restaurants");

router.get("/restaurants", async (req, res) => {
  try {
    const allRestaurants = await Restaurants.find();
    res.status(200).json({ counter: allRestaurants.length, allRestaurants });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
