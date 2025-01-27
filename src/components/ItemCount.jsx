import React, { useState } from "react";
import "../../public/ItemDetail.css";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleIncrease = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="item-count">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
            <button onClick={() => onAdd(quantity)}>🛒</button>
        </div>
    );
};

export default ItemCount;
