import React from 'react';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

const App = () => {
  // Componente principal de la aplicación
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="TIENDA AMA - Bienvenidos a la tienda virtual de Artes Marciales Mixtas" />
    </>
  );
};

export default App;
