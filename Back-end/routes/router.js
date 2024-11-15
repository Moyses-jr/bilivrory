const router = require("express").Router();

const booksRouter = require("./books");
const customersRouter = require("./customers");
const salesRouter = require("./sales");

router.use("/", booksRouter);
router.use("/", customersRouter);
router.use("/", salesRouter);

module.exports = router;
