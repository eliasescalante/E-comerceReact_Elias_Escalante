import React from "react";
import { Link } from "react-router-dom";
import "../../public/ItemListContainer.css";
import products from "../mock/data.jsx";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            {/* Saludo debajo del navbar */}
            <div className="greeting-container">
                <h1>{greeting}</h1>
            </div>

            {/* Listado de productos */}
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <img
                            src={product.img}
                            alt={product.name}
                            className="product-image"
                        />
                        <p>Precio: ${product.price}</p>
                        <Link to={`/item/${product.id}`} className="details-link">
                            Ver detalle
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;

