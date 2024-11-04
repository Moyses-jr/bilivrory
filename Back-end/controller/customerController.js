const Customer = require("../models/Customer");

const customerController = {
  create: async (req, res) => {
    try {
      const customer = {
        name: req.body.name,
        cpf: req.body.cpf,
        phone: req.body.phone,
      };

      const response = await Customer.create(customer);

      return res.status(201).json({ response, msg: "Cliente cadastrado com sucesso!" });
    } catch (error) {
      return res.status(400).json({ msg: `Não foi possível cadastrar o cliente, erro: ${error}` });
    }
  },

  getAll: async (req, res) => {
    try {
      const response = await Customer.find();

      if (!response.length) {
        return res.status(404).json({ msg: "Nenhum cliente encontrado." });
      }

      return res.status(200).json({ response, msg: "Lista de clientes." });
    } catch (error) {
      return res.status(400).json({ msg: `Erro ao buscar clientes: ${error}` });
    }
  },

  get: async (req, res) => {
    try {
      const { id } = req.params; 

      const response = await Customer.findById(id);

      if (!response) {
        return res.status(404).json({ msg: "Cliente não encontrado." });
      }

      return res.status(200).json({ response, msg: "Cliente encontrado." });
    } catch (error) {
      return res.status(400).json({ msg: `Erro ao buscar cliente: ${error}` });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params; 

      const response = await Customer.findByIdAndDelete(id); 

      if (!response) {
        return res.status(404).json({ msg: "Cliente não encontrado." });
      }

      return res.status(200).json({ response, msg: "Cliente excluído com sucesso." });
    } catch (error) {
      return res.status(400).json({ msg: `Erro ao excluir cliente: ${error}` });
    }
  },
};

module.exports = customerController;
