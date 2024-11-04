const router = require("express").Router();
const customerController = require("../controller/customerController");

router.post("/customer", customerController.create); 
router.get("/customer/:id", customerController.get); 
router.get("/customers", customerController.getAll); 
router.delete("/customer/:id", customerController.delete);

module.exports = router;
