import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../mock/data.jsx";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchedProduct = products.find((item) => item.id === parseInt(id));
        setProduct(fetchedProduct);
    }, [id]);

    return (
        <div className="item-detail-container">
            {product ? (
                <div>
                    <h2>{product.name}</h2>
                    <img src={product.img} alt={product.name} style={{ width: "200px" }} />
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                </div>
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
