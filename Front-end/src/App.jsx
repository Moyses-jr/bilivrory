import { FaRegEdit } from "react-icons/fa";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import RegisterForm from "./registerForm";
import CustomerRegisterForm from "./registerForm/CustomerRegisterFrom";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);

  const handlerShowModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlerShowCustomerModal = () => {
    setIsCustomerModalOpen(!isCustomerModalOpen);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={handlerShowModal}>
          <FaRegEdit />
        </button>

        <button onClick={handlerShowCustomerModal} style={{ marginLeft: "10px" }}>
          Cadastro do Cliente
        </button>
        
        <RegisterForm
          isModalOpen={isModalOpen}
          handlerShowModal={handlerShowModal}
        />
        
        <CustomerRegisterForm
          isModalOpen={isCustomerModalOpen}
          handlerShowModal={handlerShowCustomerModal}
        />
      </div>
    </>
  );
}

export default App;
