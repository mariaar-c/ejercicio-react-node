import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import ProductList from "./pages/ProductList";
import Contacto from "./pages/contacto";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import StickyCart from "./components/StickyCart";
import Cart from "./pages/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exists, quantity: exists.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const exists = cartItems.find((item) => item.id === productId);
    if (exists) {
      if (exists.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== productId));
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      }
    }
  };

  return (
    <Router>
      <Header />
      <NavBar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/products"
          element={
            <ProductList
              addToCart={addToCart}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
        <Route path="/contact" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <StickyCart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </Router>
  );
}

export default App;
