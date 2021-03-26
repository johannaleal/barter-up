const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderItems: [
      {
        name: {
          type: String, 
          required: true 
        },
        quantity: { 
          type: Number, 
          required: true 
        },
        image: { 
          type: String, 
          required: true 
        },
        price: { 
          type: Number, 
          required: true 
        },
        product: {
          type: String,
          ref: "Product",
          required: true,
        },
      },
    ],
    shippingAddress: {
      fullName: { 
        type: String, 
        required: true 
      },
      address: { 
        type: String, 
        required: true 
      },
      city: { type: String, 
        required: true 
      },
      postalCode: { 
        type: String, 
        required: true 
      },
      country: {
        type: String, 
        required: true 
      }
    },
    paymentMethod: { 
      type: String, 
      required: true 
    },
    itemsPrice: { 
      type: Number, 
      required: true
    },
    shippingPrice: { 
      type: Number, 
      required: true 
    },
    taxPrice: { 
      type: Number, 
      required: true 
    },
    totalPrice: { 
      type: Number, 
      required: true 
    },
    user: {
      type: String,
      ref: "User", required: true 
    },
    seller: { 
      type: String, 
      ref: "User" 
    }
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;