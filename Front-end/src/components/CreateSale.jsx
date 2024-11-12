import { useEffect, useState } from "react";
import Modal from "./modal";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

export default function CreateSale({ isModalOpen, handlerShowModal }) {
  const [customers, setCustomers] = useState([]);
  const [books, setBooks] = useState([]);

  const getCustomers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/customers", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const responseJson = await response.json();
      if (responseJson.response) {
        setCustomers(responseJson.response);
      } else {
        setCustomers([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/getAll", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const responseJson = await response.json();
      if (responseJson.response) {
        setBooks(responseJson.response);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCustomers();
    getBooks();
  }, [isModalOpen]);

  const validationSchema = Yup.object({
    customerId: Yup.string().required("Selecione um comprador"),
    booksId: Yup.array().min(1, "Selecione pelo menos um livro"),
  });

  return (
    <Modal show={isModalOpen} onClose={handlerShowModal}>
      <Modal.Header>
        <h2 className="text-2xl font-bold">Cadastro de Venda</h2>
      </Modal.Header>
      <Modal.Content>
        <Formik
          initialValues={{
            customerId: "",
            booksId: [],
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const response = await fetch(
                "http://localhost:3000/api/sales/",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                }
              );
              console.log({ msg: response })
              resetForm();
              alert("Compra criada!");
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <label htmlFor="customerId" className="text-xl">
                Selecionar Comprador
              </label>
              <Field
                as="select"
                id="customerId"
                name="customerId"
                onChange={(event) => {
                  setFieldValue("customerId", event.target.value);
                }}
                className="p-2"
              >
                <option value="" label="Selecione um comprador" />
                {customers.map((customer) => (
                  <option key={customer._id} value={customer._id}>
                    {customer.name}
                  </option>
                ))}
              </Field>

              {errors.customerId && touched.customerId && (
                <div className="text-red-500">{errors.customerId}</div>
              )}

              <div id="checkbox-group" className="mt-3 text-xl">
                Selecionar Livros
              </div>
              <div role="group" aria-labelledby="checkbox-group">
                {books.map((book) => (
                  <label key={book._id} className="m-1">
                    <Field type="checkbox" name="booksId" value={book._id} />
                    {book.title}
                  </label>
                ))}
              </div>

              {errors.booksId && touched.booksId && (
                <div className="text-red-500">{errors.booksId}</div>
              )}

              <button
                type="button"
                className="button-cancel"
                onClick={handlerShowModal}
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="ml-2 mt-3 bg-green-500 text-black hover:bg-green-700 hover:text-white"
              >
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </Modal.Content>
    </Modal>
  );
}
