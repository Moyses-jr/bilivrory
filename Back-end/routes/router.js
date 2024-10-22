const router = require("express").Router();

const booksRouter = require("./books");

router.use("/", booksRouter);

module.exports = router;
