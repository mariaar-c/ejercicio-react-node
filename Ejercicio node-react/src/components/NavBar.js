import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar style={{ background: "#b4ffcd", fontSize: "20px" }}>
      <Navbar.Brand as={Link} to="/">
        Inicio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/products">
            Productos
          </Nav.Link>
          <Nav.Link as={Link} to="/Cart">
            {" "}
            Carrito
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
