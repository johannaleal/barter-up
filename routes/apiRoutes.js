const Router = require("express").Router();
const passport = require("../authentication/passport");

Router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(
      "This route should be protected. If you're seeing this, don't look."
    );
  }
);

module.exports = Router;
