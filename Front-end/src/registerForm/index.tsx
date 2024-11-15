import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./yupRegister";
import Modal from "../components/modal";
import "./style.css";

interface registerFormProps {
  isModalOpen: Boolean;
  handlerShowModal: () => void;
}

const BookRegisterForm: React.FC<registerFormProps> = ({
  isModalOpen,
  handlerShowModal,
}) => {
  const handlerModal = (resetForm) => {
    resetForm();
    handlerShowModal();
  };
  async function createPost(data, resetForm) {
    try {
      const response = await fetch("http://localhost:3000/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      const result = await response.json();
      console.log("Sucesso:", result);
      handlerShowModal();
      resetForm();
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  }

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          autor: "",
          value: "",
          description: "",
          genero: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => createPost(values, resetForm)}
      >
        {({ handleSubmit, resetForm }) => (
          <Modal show={isModalOpen} onClose={() => handlerModal(resetForm)}>
            <Form onSubmit={handleSubmit}>
              <Modal.Header>
                <h2>Dados para cadastro</h2>
              </Modal.Header>
              <Modal.Content>
                <div className={"form-container"}>
                  <div>
                    <label htmlFor="title" className={`label`}>
                      Título
                    </label>
                    <Field type="text" name="title" className={`input`} />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className={`error`}
                    />
                  </div>

                  <div>
                    <label htmlFor="autor" className={`label`}>
                      Autor
                    </label>
                    <Field type="text" name="autor" className={`input`} />
                    <ErrorMessage
                      name="autor"
                      component="div"
                      className={`error`}
                    />
                  </div>

                  <div>
                    <label htmlFor="value" className={`label`}>
                      Valor
                    </label>
                    <Field type="number" name="value" className={`input`} />
                    <ErrorMessage
                      name="value"
                      component="div"
                      className={`error`}
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className={`label`}>
                      Descrição
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      className={`input textarea`}
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className={`error`}
                    />
                  </div>

                  <div>
                    <label htmlFor="genero" className={`label`}>
                      Gênero
                    </label>
                    <Field as="select" name="genero" className={`input select`}>
                      <option value="">Selecione um gênero</option>
                      <option value="ficcao">Ficção</option>
                      <option value="nao-ficcao">Baseado em fatos reais</option>
                      <option value="romance">Romance</option>
                      <option value="aventura">Aventura</option>
                      <option value="biografia">Biografia</option>
                    </Field>
                    <ErrorMessage
                      name="genero"
                      component="div"
                      className={`error`}
                    />
                  </div>
                </div>
              </Modal.Content>
              <Modal.Footer>
                <button
                  className="button-cancel"
                  onClick={() => handlerModal(resetForm)}
                >
                  Cancelar
                </button>
                <button className="button-confirm" type="submit">
                  Confirmar
                </button>
              </Modal.Footer>
            </Form>
          </Modal>
        )}
      </Formik>
    </>
  );
};

export default BookRegisterForm;
