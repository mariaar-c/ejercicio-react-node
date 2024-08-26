import React from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const StickyCart = ({ cartItems, removeFromCart }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={stickyCartStyle}>
      <h5>
        Carrito <i className="fas fa-shopping-cart"></i>
      </h5>
      <p>Total de artículos: {totalItems}</p>

      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ListGroup variant="flush">
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  {item.title}{" "}
                  <Badge variant="secondary">x{item.quantity}</Badge>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)} // Pasando el ID del producto
                >
                  Eliminar
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      <Link to="/cart">
        <Button variant="success" className="mt-3">
          Ver carrito
        </Button>
      </Link>
    </div>
  );
};

const stickyCartStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "#f8f9fa",
  padding: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  zIndex: 1000,
  width: "250px",
};

export default StickyCart;
