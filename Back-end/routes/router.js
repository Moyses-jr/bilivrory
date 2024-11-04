const router = require("express").Router();

const booksRouter = require("./books");
const customersRouter = require("./customers");

router.use("/", booksRouter);
router.use("/", customersRouter);

module.exports = router;
