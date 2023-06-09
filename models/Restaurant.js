const mongoose = require("mongoose");

const Restaurant = mongoose.model("Restaurant", {
  placeId: Number,
  name: String,
  address: String,
  location: {
    lng: Number,
    lat: Number,
  },
  phone: String,
  thumbnail: String,
  type: String,
  category: Number,
  rating: Number,
  vegan: Number,
  vegOnly: Number,
  link: String,
  description: String,
  pictures: [String],
  price: String,
  website: String,
  facebook: String,
  nearbyPlacesIds: [Number],
});

module.exports = Restaurant;
