import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "../components/modal";
import "./style.css";

function CustomerRegisterForm({ isModalOpen, handlerShowModal }) {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const formData = new FormData(event.target); // Coleta os dados do formulário
    const customerData = {
      name: formData.get("name"),
      cpf: formData.get("cpf"),
      phone: formData.get("phone"),
    };

    try {
      const response = await fetch("http://localhost:3000/api/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData), // Envia os dados do cliente em JSON
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      const result = await response.json(); // Adiciona aqui
      console.log("Resposta da API:", result); // E aqui
      console.log("Cliente cadastrado:", result);
      handlerShowModal(); // Fecha o modal após o sucesso
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  };

  return (
    <Modal show={isModalOpen} onClose={handlerShowModal}>
      <Modal.Header>
        <h2>Cadastro do Cliente</h2>
      </Modal.Header>
      <Modal.Content>
        <form onSubmit={handleSubmit}> {/* Adiciona o evento de submit aqui */}
          <div>
            <label className={`label`}>Nome:</label>
            <input className={`input`} type="text" name="name" required />
          </div>
          <div>
            <label className={`label`}>CPF:</label>
            <input className={`input`} type="text" name="cpf" required />
          </div>
          <div>
            <label className={`label`}>Telefone:</label>
            <input className={`input`} type="tel" name="phone" />
          </div>
          <Modal.Footer>
            <button type="button" className="button-cancel" onClick={handlerShowModal}>
              Cancelar
            </button>
            <button type="submit" className="button-confirm">Cadastrar</button>
          </Modal.Footer>
        </form>
      </Modal.Content>
    </Modal>
  );
}

export default CustomerRegisterForm;
