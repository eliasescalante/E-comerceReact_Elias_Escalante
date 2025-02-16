import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
    const { cart } = useContext(CartContext);

    const handleCheckout = () => {
        alert("Compra realizada con éxito.");
    };

    return (
        <div>
            <h2>Finalizar compra</h2>
            {cart.length > 0 ? (
                <CheckoutForm onSubmit={handleCheckout} />
            ) : (
                <p>No hay productos en el carrito</p>
            )}
        </div>
    );
};

export default Checkout;
