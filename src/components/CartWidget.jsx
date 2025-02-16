import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import cartImage from '../assets/img/cart.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link to="/cart" className="cart-widget d-flex align-items-center">
            <img 
                src={cartImage} 
                alt="Cart" 
                style={{ width: "30px", height: "30px", marginRight: "10px" }} 
            />
            <span className="badge">{totalItems}</span>
        </Link>
    );
};

export default CartWidget;
