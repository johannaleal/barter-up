require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 4000;

// connect to database with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernAuthDB")

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use(require("./routes"))

app.listen(PORT, () => {
  console.log(`You're listening on http://localhost:${PORT}`)
})