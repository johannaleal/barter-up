const Router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("./passport");
const db = require("../models");

Router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false}, (err, user, info) => {
    console.log(user)
    if (err || !user) {
      return res.status(400).json({
        message: info.message,
        user: user
      })
    }
    req.login(user, { session: false }, (err) => {
      if (err) res.send(err);
      //TODO: set this up to work with tokens
      const token = jwt.sign(user.toJSON(), process.env.PASSPORT_SECRET)
      res.json({ 
        email: user.email, 
        token: token})
    })
  })(req, res, next);
})

Router.post("/register", async (req, res) => {
  // create a new user in the database form the body of the request
  try {
    const user = await db.User.create(req.body);
    res.json(user)
  } catch (err) {
    res.json({
      message: "You're username must be unique",
      err: err
    });
  }

});

module.exports = Router;