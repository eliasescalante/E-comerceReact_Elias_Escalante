/*
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
    const { cart } = useContext(CartContext);

    const handleCheckout = () => {
        alert("Compra realizada con éxito.");
    };

    const generateTrackingCode = () => {
        return Math.random().toString(36).substr(2, 9).toUpperCase();
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
*/
/*
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [isCheckedOut, setIsCheckedOut] = useState(false);

    const handleCheckout = () => {
        // Aquí debes agregar la lógica para crear el código de seguimiento
        const trackingCode = Math.floor(Math.random() * 1000000);
        alert(`Compra realizada con éxito. Tu código de seguimiento es: ${trackingCode}`);
        setIsCheckedOut(true);
        clearCart(); // Vaciar el carrito después de la compra
    };

    if (isCheckedOut) {
        return (
            <div>
                <h2>¡Gracias por tu compra!</h2>
                <p>Te avisaremos cuando el producto esté en viaje.</p>
                <p>Código de seguimiento: {Math.floor(Math.random() * 1000000)}</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Finalizar compra</h2>
            <CheckoutForm />
        </div>
    );
};

export default Checkout;
*/

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        // Generar un código de seguimiento aleatorio
        const trackingCode = Math.floor(Math.random() * 1000000).toString();
        
        // Vaciar el carrito después de la compra
        clearCart();

        // Redirigir a la vista de ThankYou.jsx con el código de seguimiento
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