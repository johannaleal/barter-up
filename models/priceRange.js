const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const priceRangeSchema = new Schema({
  priceRangeName: {
    type: String,
    required: true,
    unique: true
  },
  lowEndPrice: {
      type: Number,
      required: true,
  },
  highEndPrice: {
      type: Number,
      required: true
  }
});

const PriceRange = mongoose.model("PriceRange", priceRangeSchema);

module.exports = PriceRange;
