import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = ({ product, onAddToCart }) => {
    return (
        <Card className="mb-4" style={{ width: '12rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="warning" onClick={() => onAddToCart(product)}>
                    + Añadir al carrito
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Product;
