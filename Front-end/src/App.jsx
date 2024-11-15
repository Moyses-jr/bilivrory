import { FaBook, FaStore, FaUserEdit } from "react-icons/fa";
import booksLogo from "/books.png";
import "./App.css";
import { useState } from "react";
import BookRegisterForm from "./registerForm";
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
        <button onClick={handlerShowModal} className="flex items-center gap-2">
          <FaBook />
          <div>Editar Livro</div>
        </button>

        <button
          onClick={handlerShowCustomerModal}
          className="flex items-center gap-2 ml-10"
        >
          <FaUserEdit />
          <div>Cadastro do Cliente</div>
        </button>

        <button
          onClick={handlerShowSaleModal}
          className="flex items-center gap-2 ml-10"
        >
          <FaStore />
          <div>Cadastro de Venda</div>
        </button>

        <BookRegisterForm
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
