import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";

const App = () => {
  return (
    <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la Tienda AMA" />} />
            <Route path="/category/:id" element={<ItemListContainer greeting="Productos por categoría" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
    </BrowserRouter>
  );
};

export default App;
