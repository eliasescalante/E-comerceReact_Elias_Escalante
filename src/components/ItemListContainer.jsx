import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../mock/data.jsx";
import "../../public/ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
    const { id: categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            // Filtrar los productos por categoría
            const filtered = products.filter((product) => product.category === categoryId);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products); // Muestra todos los productos si no hay categoría
        }
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <div className="greeting-container">
                <h1>{greeting} {categoryId && <span>{categoryId}</span>}</h1>
            </div>
            <div className="product-list">
                {filteredProducts.map((product) => (
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

