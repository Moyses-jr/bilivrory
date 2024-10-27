import { FaRegEdit } from "react-icons/fa";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import RegisterForm from "./registerForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlerShowModal = () => {
    setIsModalOpen(!isModalOpen);
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
        <RegisterForm
          isModalOpen={isModalOpen}
          handlerShowModal={handlerShowModal}
        />
      </div>
    </>
  );
}

export default App;
