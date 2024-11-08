const router = require("express").Router()
const saleController = require("../controller/saleController")

router.get("/sales/", saleController.getAll);
router.post("/sales/", saleController.create);

module.exports = router;
