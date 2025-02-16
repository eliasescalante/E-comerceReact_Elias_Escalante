import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, totalAmount, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="cart-container">
                <h2>El carrito está vacío</h2>
                <Link to="/">Volver a la tienda</Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} unidades - ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            <h3>Total: ${totalAmount}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout">
                <button>Finalizar Compra</button>
            </Link>
        </div>
    );
};

export default Cart;

