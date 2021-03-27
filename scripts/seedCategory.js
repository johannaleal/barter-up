const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Category collection and inserts the categories below.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/barter-up"
);

const categorySeed = [
    {
        categoryName: "Art/Deco",
        categoryType: "Item"
    },
    {
        categoryName: "Baby",
        categoryType: "Item"
    },
    {
        categoryName: "Biking",
        categoryType: "Item"
    },
    {
        categoryName: "Books",
        categoryType: "Item"
    },
    {
        categoryName: "Clothing",
        categoryType: "Item"
    },
    {
        categoryName: "Clothing Accessories",
        categoryType: "Item"
    },
    {
        categoryName: "Collectables/Toys",
        categoryType: "Item"
    },
    {
        categoryName: "Cosmetics",
        categoryType: "Item"
    },
    {
        categoryName: "Electronics",
        categoryType: "Item"
    },
    {
        categoryName: "Game Discs/DVDs",
        categoryType: "Item"
    },
    {
        categoryName: "Gaming",
        categoryType: "Item"
    },
    {
        categoryName: "Groceries",
        categoryType: "Item"
    },
    {
        categoryName: "Home",
        categoryType: "Item"
    },
    {
        categoryName: "Homemade",
        categoryType: "Item"
    },
    {
        categoryName: "Jewelery",
        categoryType: "Item"
    },
    {
        categoryName: "Music",
        categoryType: "Item"
    },
    {
        categoryName: "Office",
        categoryType: "Item"
    },
    {
        categoryName: "Photography",
        categoryType: "Item"
    },
    {
        categoryName: "Shoes",
        categoryType: "Item"
    },
    {
        categoryName: "Tech",
        categoryType: "Item"
    },
    {
        categoryName: "Textbooks",
        categoryType: "Item"
    },
    {
        categoryName: "Tickets/Gift Cards",
        categoryType: "Item"
    },
    {
        categoryName: "Other",
        categoryType: "Item"
    },
    {
        categoryName: "Cleaning/Organizing",
        categoryType: "Service"
    },
    {
        categoryName: "Consulting",
        categoryType: "Service"
    },
    {
        categoryName: "Cooking",
        categoryType: "Service"
    },
    {
        categoryName: "Delivery",
        categoryType: "Service"
    },
    {
        categoryName: "Design",
        categoryType: "Service"
    },
    {
        categoryName: "Grocery Run",
        categoryType: "Service"
    },
    {
        categoryName: "Hand-crafting",
        categoryType: "Service"
    },
    {
        categoryName: "Handyman/Repairs",
        categoryType: "Service"
    },
    {
        categoryName: "Laundry",
        categoryType: "Service"
    },
    {
        categoryName: "Lessons",
        categoryType: "Service"
    },
    {
        categoryName: "Moving Help",
        categoryType: "Service"
    },
    {
        categoryName: "Music/Entertainment",
        categoryType: "Service"
    },
    {
        categoryName: "Online Marketing",
        categoryType: "Service"
    },
    {
        categoryName: "Party/Events",
        categoryType: "Service"
    },
    {
        categoryName: "Personal Assistance",
        categoryType: "Service"
    },
    {
        categoryName: "Pet Care",
        categoryType: "Service"
    },
    {
        categoryName: "Photo/Video",
        categoryType: "Service"
    },
    {
        categoryName: "Programming/Tech",
        categoryType: "Service"
    },
    {
        categoryName: "Quick Errands",
        categoryType: "Service"
    },
    {
        categoryName: "Research",
        categoryType: "Service"
    },
    {
        categoryName: "Shopping",
        categoryType: "Service"
    },
    {
        categoryName: "The Arts",
        categoryType: "Service"
    },
    {
        categoryName: "Training",
        categoryType: "Service"
    },
    {
        categoryName: "Tutoring",
        categoryType: "Service"
    },
    {
        categoryName: "Web Dev",
        categoryType: "Service"
    },
    {
        categoryName: "Writing/Editing",
        categoryType: "Service"
    }
];

db.Category
    .remove({})
    .then(() => db.Category.collection.insertMany(categorySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
    
    