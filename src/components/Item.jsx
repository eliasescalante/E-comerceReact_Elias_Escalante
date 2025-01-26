import React from "react";
import { Link } from "react-router-dom";
import "../../public/ItemListContainer.css";

const Item = ({ id, name, img, price}) => {
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <img src={img} alt={name} className="product-image" />
            <p>Precio: ${price}</p>
            <Link to={`/item/${id}`} className="details-link">
                Ver detalle
            </Link>
        </div>
    );
};

export default Item;
