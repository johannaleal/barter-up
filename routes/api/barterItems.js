const router = require("express").Router();
const barterItemsController = require("../../controllers/barterItemsController");

// Matches with "/api/barteritems"
router.route("/")
  .get(barterItemsController.findAll)
  .post(barterItemsController.create);

// Matches with "/api/barteritems/:id"
router
  .route("/:id")
  .get(barterItemsController.findById)
  .put(barterItemsController.update)
  .delete(barterItemsController.remove);

module.exports = router;
