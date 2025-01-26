import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../mock/data.jsx";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchedProduct = products.find((item) => item.id === parseInt(id));
        setProduct(fetchedProduct);
    }, [id]);

    return (
        <div className="item-detail-container">
            {product ? <ItemDetail product={product} /> : <p>Cargando producto...</p>}
        </div>
    );
};

export default ItemDetailContainer;

