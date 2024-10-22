const mongoose = require("mongoose");

async function main() {
  const url = "mongodb://localhost:27017/mydatabase";
  try {
    mongoose.connect(url, { dbName: "IFRS-LIB" });
    const db = mongoose.connection;

    db.on("error", (error) => {
      console.log(`Falha na conexão ${error}`);
    });

    db.once("open", () => {
      console.log("Estamos conectados no banco de dados!");
    });
  } catch (error) {
    console.log(`Erro ao tentar conectar: ${error}`);
  }
}

module.exports = { main };
