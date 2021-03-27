const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tradeSchema = new Schema(
  {
    barterItem1Id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    barterItem2Id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    barterType: {
      type: String,
      enum: ["Cash", "Trade", "Cash + Trade"],
      required: true
    },
    price: {
      type: Number,
      required: false
    }
  },
  {
    timestamps: true,
  }
);

const Trade = mongoose.model("Trade", tradeSchema);

module.exports = Trade;
