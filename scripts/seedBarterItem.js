const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Products collection and inserts the products below.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/barter-up"
);

const barterItemSeed = [
    {
        itemName: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        itemType: "Item",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        sellerId: 1,
        category: "605e867e801199266cf6f5cb",
        barterStatus: "open"
    },
];

db.BarterItem
    .remove({})
    .then(() => db.BarterItem.collection.insertMany(barterItemSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
    
    