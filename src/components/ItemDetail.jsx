import React, {useContext} from "react";
import ItemCount from "./ItemCount";
import "../../public/ItemDetail.css";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (quantity) => {
        addToCart(product, quantity);
    };

    return (
        <div className="item-detail">
            <h2>{product.name}</h2>
            <img src={product.img} alt={product.name} style={{ width: "200px" }} />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
        </div>
    );
};

export default ItemDetail;
