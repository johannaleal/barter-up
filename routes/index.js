const Router = require("express").Router();
const passport = require("../authentication/passport");

Router.use("/auth", require("../authentication/authRoutes"));

Router.use("/api", passport.authenticate('jwt', { session: false }), require("./apiRoutes"))

module.exports = Router;