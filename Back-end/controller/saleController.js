const Sale = require("../models/Sale")

const saleController = {
  create: async (req, res) => {
    try {
      const { customerId, booksId } = req.body;
      const sale = {
        customerId, booksId
      }
      const createSale = await Sale.create(sale);
      return res.status(201).json({ status: "Venda criada.", createSale });
    } catch (error) {
      return res.status(400).json({ msg: `Erro ao adicionar venda: ${error}`});
    }
  },

  getAll: async (req, res) => {
    try {
      const sales = await Sale.find();

      if (!sales) {
        return res.status(401).json({ msg: `Não registro no banco` });
      }

      return res.status(201).json({ status: "OK", sales });
    } catch (error) {
      return res.status(400).json({ msg: `Erro ao retornar valores de venda: ${error}`});
    }
  }
}

module.exports = saleController;