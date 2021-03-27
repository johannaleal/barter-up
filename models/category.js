const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categoryType: {
    type: String,
    enum: ["Item", "Service"],
    required: true
  },
  categoryName: {
    type: String,
    required: true,
    unique: true
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
