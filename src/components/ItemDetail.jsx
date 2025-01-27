import React from "react";
import ItemCount from "./ItemCount";
import "../../public/ItemDetail.css";

const ItemDetail = ({ product }) => {
    const handleAddToCart = (quantity) => {
        console.log(`Se agregaron ${quantity} unidades de ${product.name} al carrito.`);
    };

    return (
        <div className="item-detail">
            <h2>{product.name}</h2>
            <img src={product.img} alt={product.name} style={{ width: "200px" }} />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <ItemCount stock={product.stock} initial={0} onAdd={handleAddToCart} />
        </div>
    );
};

export default ItemDetail;
