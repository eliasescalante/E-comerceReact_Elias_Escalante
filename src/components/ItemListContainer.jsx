import React from 'react';
import '../../public/ItemListContainer.css';
const ItemListContainer = ({ greeting }) => {
    // Contenedor para el mensaje inicial
    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;
