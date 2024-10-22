const router = require("express").Router();

const bookController = require("../controller/bookController");

router.get("/get/:id", bookController.get);

router.get("/getAll", bookController.getAll);

router.post("/post", bookController.create);

router.put("/put/:id", bookController.put);

router.delete("/delete/:id", bookController.delete);

module.exports = router;
