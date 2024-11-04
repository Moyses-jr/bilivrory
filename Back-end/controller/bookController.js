  const Book = require("../models/Book");

  const bookController = {
    create: async (req, res) => {
      try {
        const book = {
          title: req.body.title,
          autor: req.body.autor,
          value: req.body.value,
          description: req.body.description,
          genero: req.body.genero,
        };

        const response = await Book.create(book);

        return res.status(201).json({ response, msg: "Deu bom!" });
      } catch (error) {
        return res
          .status(400)
          .json({ msg: `Não foi possível inserir o livro, erro: ${error}` });
      }
    },

    getAll: async (req, res) => {
      try {
        const response = await Book.find();

        if (!response) {
          return res.status(401).json({ msg: `Não registro no banco` });
        }

        return res.status(201).json({ response, msg: "GetAll Book" });
      } catch (error) {
        return res
          .status(400)
          .json({ msg: `Não foi possível encontrar o livro, erro:\n ${error}` });
      }
    },

    get: async (req, res) => {
      try {
        const { id } = req.params;

        const response = await Book.findById(id);

        if (!response) {
          return res.status(401).json({ msg: `Registro não encontrado` });
        }

        return res.status(201).json({ response, msg: "Get Book" });
      } catch (error) {
        return res
          .status(400)
          .json({ msg: `Não foi possível encontrar o livro, erro:\n ${error}` });
      }
    },

    put: async (req, res) => {
      try {
        const { id } = req.params;

        const book = {
          id: req.body.id,
          title: req.body.title,
          description: req.body.description,
          pageCount: req.body.pageCount,
          excerpt: req.body.excerpt,
          publishDate: req.body.publishDate,
        };

        const response = await Book.findByIdAndUpdate(id, book);

        if (!response) {
          return res.status(401).json({ msg: `Registro não encontrado` });
        }

        return res.status(201).json({ book, msg: "Put Book" });
      } catch (error) {
        return res
          .status(400)
          .json({ msg: `Não foi possível alterar o livro, erro: ${error}` });
      }
    },

    delete: async (req, res) => {
      try {
        const { id } = req.params;

        const response = await Book.findByIdAndDelete(id);

        if (!response) {
          return res.status(401).json({ msg: `Registro não encontrado` });
        }

        return res.status(201).json({ response, msg: `Delete Book` });
      } catch (error) {
        return res
          .status(400)
          .json({ msg: `Não foi possível deletar o livro, erro: ${error}` });
      }
    },
  };
  module.exports = bookController;
