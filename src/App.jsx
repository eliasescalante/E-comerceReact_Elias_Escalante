import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Cart from "./components/Cart.jsx";
import ThankYou from "./components/ThankYou.jsx";
import Checkout from "./components/Checkout.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la Tienda AMA" />} />
                    <Route path="/category/:id" element={<ItemListContainer greeting="Productos por categoría" />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/thankyou/:trackingCode" element={<ThankYou />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;
