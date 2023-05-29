const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

router.get("/restaurants", async (req, res) => {
  try {
    const allRestaurants = await Restaurant.find();
    res.status(200).json({ counter: allRestaurants.length, allRestaurants });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/restaurant/:id", async (req, res) => {
  console.log(req.query);
  try {
    const restaurantById = await Restaurant.findById(req.params.id);
    res.json(restaurantById);
  } catch (error) {
    res.status(500).json({ message: "Restaurant not found" });
  }
});

module.exports = router;
