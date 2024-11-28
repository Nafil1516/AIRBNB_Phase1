const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  image: String,
  category: String,
  title: String,
  host: String,
  price: String
});

module.exports = mongoose.model('Listing', listingSchema);
