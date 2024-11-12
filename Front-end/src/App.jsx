import { FaRegEdit, FaStore } from "react-icons/fa";
import booksLogo from "/books.png";
import "./App.css";
import { useState } from "react";
import RegisterForm from "./registerForm";
import CustomerRegisterForm from "./registerForm/CustomerRegisterFrom";
import CreateSale from "./components/CreateSale";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
  const [isSaleModalOpen, setIsSaleModalOpen] = useState(false);

  const handlerShowModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlerShowCustomerModal = () => {
    setIsCustomerModalOpen(!isCustomerModalOpen);
  };

  const handlerShowSaleModal = () => {
    setIsSaleModalOpen(!isSaleModalOpen);
  };

  return (
    <>
      <div className="flex justify-center">
          <img src={booksLogo} alt="Books logo" className="w-[122px] h-[80px]" />
      </div>
      <h1 className="mb-2">Bilivrory</h1>
      <div className="flex flex-row">
        <button onClick={handlerShowModal}>
          <FaRegEdit />
        </button>

        <button onClick={handlerShowCustomerModal} style={{ marginLeft: "10px" }}>
          Cadastro do Cliente
        </button>
        
        <button onClick={handlerShowSaleModal} style={{ marginLeft: "10px" }} className="flex items-center gap-2">
          <FaStore />
          <div>
            Cadastro de Venda
          </div>
        </button>
        
        <RegisterForm
          isModalOpen={isModalOpen}
          handlerShowModal={handlerShowModal}
        />
        
        <CustomerRegisterForm
          isModalOpen={isCustomerModalOpen}
          handlerShowModal={handlerShowCustomerModal}
        />

        <CreateSale
          isModalOpen={isSaleModalOpen}
          handlerShowModal={handlerShowSaleModal}
        />
      </div>
    </>
  );
}

export default App;
