import React from 'react';
import cartImage from '../assets/img/cart.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    // Contenedor del carrito
    return (
        <div className="cart-widget d-flex align-items-center">
            <img
                src={cartImage}
                alt="Cart"
                style={{ width: '30px', height: '30px', marginRight: '10px' }}
            />
            <span className="badge">0</span>
        </div>
    );
};

export default CartWidget;
