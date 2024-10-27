/* eslint-disable react/prop-types */
import "./style.css"; // Opcional: Adicione seus estilos aqui

const Modal = ({ children, show, onClose }) => {
  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        {children}
      </div>
    </div>
  );
};

const Header = ({ children }) => {
  return <div className="modal-header">{children}</div>;
};

const Content = ({ children }) => {
  return <div className="modal-content">{children}</div>;
};

const Footer = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
