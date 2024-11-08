import { FaRegEdit } from "react-icons/fa";
import booksLogo from "/books.png";
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
      <div className="flex justify-center">
          <img src={booksLogo} alt="Books logo" className="w-[122px] h-[80px]" />
      </div>
      <h1 className="mb-2">Bilivrory</h1>
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
