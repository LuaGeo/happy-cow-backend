const express = require("express");
const router = express.Router();
const FavoriteRestaurants = require("../models/FavoriteRestaurants");
const User = require("../models/User");

router.post("/restaurants/favorite", async (req, res) => {
  try {
    let {
      name,
      description,
      thumbnail,
      userId,
      address,
      type,
      rating,
      price,
      restaurantId,
    } = req.body;

    const favoritedRestaurant = await FavoriteRestaurants.findOne({
      userId,
      restaurantId,
    });

    const userExists = await User.findOne({
      _id: userId,
    });

    if (favoritedRestaurant) {
      res
        .status(409)
        .json({ error: { message: "Restaurant already favorited" } });
    } else if (!userId || !restaurantId || !name) {
      res.status(400).json({ error: { message: "Missing Parameters" } });
    } else if (!userExists) {
      res.status(400).json({ error: { message: "User does not exist" } });
    } else {
      const newFavoriteRestaurant = new FavoriteRestaurants({
        name,
        description,
        thumbnail,
        address,
        type,
        rating,
        price,
        userId,
        restaurantId,
      });
      await newFavoriteRestaurant.save();
      res.status(201).json(newFavoriteRestaurant);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/restaurants/favorite", async (req, res) => {
  try {
    const { userId, restaurantId } = req.body;
    const favoritedRestaurant = await FavoriteRestaurants.findOne({
      userId,
      RestaurantId,
    });
    if (!favoritedRestaurant) {
      res.status(404).json({ message: "favorite not found" });
    } else {
      await favoritedRestaurant.deleteOne(favoritedRestaurant._id);
      res.status(204).json();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/restaurants/favorite/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const userExists = await User.findOne({
      _id: userId,
    });
    if (userExists) {
      const favoritedRestaurant = await FavoriteRestaurants.find({
        userId,
      });
      res.status(200).json(favoritedRestaurant);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

// TESTAR ROTAS
// SE OK: CRIAR PAGINAS SIGNUP E LOGIN
// USAR ASYNC STORAGE
// TESTAR ROTA FAVORITOS
// CRIAR PAGINA FAVORITOS
