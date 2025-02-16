/*
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../mock/data.jsx";
import ItemList from "./ItemList";
import "../../public/ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
    const { id: categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            const filtered = products.filter((product) => product.category === categoryId);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <div className="greeting-container">
                <h1>{greeting} {categoryId && <span>{categoryId}</span>}</h1>
            </div>
            <ItemList products={filteredProducts} />
        </div>
    );
};

export default ItemListContainer;
*/
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/productService";
import ItemList from "./ItemList";
import "../../public/ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
    const { id: categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            if (categoryId) {
                const filtered = products.filter((product) => product.category === categoryId);
                setFilteredProducts(filtered);
            } else {
                setFilteredProducts(products);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <div className="greeting-container">
                <h1>{greeting} {categoryId && <span>{categoryId}</span>}</h1>
            </div>
            <ItemList products={filteredProducts} />
        </div>
    );
};

export default ItemListContainer;