import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        const trackingCode = Math.floor(Math.random() * 1000000).toString();
        
        clearCart();
        navigate(`/thankyou/${trackingCode}`);
    };

    return (
        <div>
            <h2>Finalizar compra</h2>
            <CheckoutForm onSubmit={handleCheckout} />
        </div>
    );
};

export default Checkout;