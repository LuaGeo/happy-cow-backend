const mongoose = require("mongoose");

const FavoriteRestaurants = mongoose.model("FavoriteRestaurants", {
  restaurantId: String,
  userId: String,
  //   placeId: Number,
  name: String,
  address: String,
  //   location: {
  //     lng: Number,
  //     lat: Number,
  //   },
  //   phone: String,
  thumbnail: String,
  type: String,
  //   category: Number,
  rating: Number,
  //   vegan: Number,
  //   vegOnly: Number,
  //   link: String,
  description: { type: String, required: false },
  //   pictures: [String],
  price: { type: String, required: false },
  //   website: { type: String, required: false },
  //   facebook: { type: String, required: false },
  //   nearbyPlacesIds: [Number],
});

module.exports = FavoriteRestaurants;
