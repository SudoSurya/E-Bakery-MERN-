const mongoose = require("mongoose");

const NewProductSchema = mongoose.Schema({
  P_name: {
    type: String,
    required: true,
  },
  P_category: {
    type: String,
    required: true,
  },
  P_price: {
    type: Number,
    required: true,
  },
  P_image: {
    type: String,
    required: true,
  },
  P_stock: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("NewProductSchema", NewProductSchema);
