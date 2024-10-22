const express = require("express");
const cors = require("cors");
const { main } = require("./db/dbConnection");
require("dotenv").config();
// const requireDir = require("require-dir");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// DB Connection
main();

// Rotas
const routes = require("./routes/router");

// Models - Não utilizado pois tenho apenas um Model
// requireDir("./models");

// Routes
app.use("/api", routes);

app.listen(port, () => {
  console.log("Aplicativo ouvindo a porta 3000");
});
