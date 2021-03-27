const router = require("express").Router();
const barterItemRoutes = require("./barterItems");

// Book routes
router.use("/barterItems", barterItemRoutes);

module.exports = router;
