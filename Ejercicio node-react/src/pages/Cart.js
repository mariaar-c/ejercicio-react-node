import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de importar Bootstrap
import { Link } from "react-router-dom";

const CartPage = ({ cartItems, removeFromCart }) => {
  const calculateTotalPrice = () => {
    // Puedes agregar una propiedad "price" en los objetos de película si necesitas manejar precios.
    // Aquí simplemente contamos el número de artículos.
    return cartItems.length;
  };

  if (cartItems.length === 0) {
    return (
      <div className="container text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/">
          <Button variant="primary">Volver a la tienda</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="my-4 text-center">Tu Carrito</h1>
      <div className="row">
        {cartItems.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{
                  height: "300px",
                  objectFit: "contain",
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  <strong>Creador:</strong> {item.creator}
                </p>
                <p className="card-text">
                  <strong>Rating:</strong> {item.rating}
                </p>
                <p className="card-text">
                  <strong>Fechas:</strong> {item.dates}
                </p>
                <p className="card-text">
                  <strong>Canal:</strong> {item.channel}
                </p>
                <Button variant="danger" onClick={() => removeFromCart(item)}>
                  - Eliminar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <h3>Total de artículos: {calculateTotalPrice()}</h3>
        <Link to="/Product">
          <Button variant="success">Continuar Comprando</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
