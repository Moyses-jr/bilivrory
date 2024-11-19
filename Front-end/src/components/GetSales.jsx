import { useEffect, useState } from "react";
import Modal from "./modal";

export default function GetSales ({ isModalOpen, handlerShowModal }) {
  const [sales, setSales] = useState([]);

  const getSales = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/sales/", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const responseJson = await response.json();
      if (responseJson.sales) {
        setSales(responseJson.sales);
      } else {
        setSales([]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getSales()
  }, [isModalOpen]);

  return (
    <Modal show={isModalOpen} onClose={handlerShowModal}>
      <Modal.Header>
        <h2 className="text-2xl font-bold">Mostrar Vendas</h2>
      </Modal.Header>
      <Modal.Content>
        <hr />
        {sales.map((sale) => {
          const dataCru = new Date(sale.createdAt);
          const options = {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          };
          const dataVenda = dataCru.toLocaleDateString("pt-BR", options);

          return (
            <div key={sale._id}>
              <div className="my-2">
                <div className="flex">
                  <b>Comprador:</b> {sale.customerId.name}
                </div>
                <div className="flex">
                  <b>Data:</b> {dataVenda}
                </div>
                <div className="flex flex-col items-start">
                  <b>Livros comprados:</b> 
                  <ul className="list-disc h-min w-min flex flex-col items-start"> 
                    {sale.booksId.map((book) => (
                      <li key={book._id}>{book.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <hr />
            </div>
          )
        })}
      </Modal.Content>
    </Modal>
  )
}