const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barterItemSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    required: true,
    enum: ["Item", "Service"]
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category"
  },
  barterStatus: {
    type: String,
    required: true,
    enum: ["Open", "Closed"]
  }
});

const BarterItem = mongoose.model("BarterItem", barterItemSchema);

module.exports = BarterItem;
