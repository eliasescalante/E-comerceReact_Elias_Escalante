import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <Item
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    img={product.img}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default ItemList;
