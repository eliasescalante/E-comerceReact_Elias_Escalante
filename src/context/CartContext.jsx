import { useState } from "react";
import { createContext } from "react";

//creo el contexto
const CartContext = createContext();

//creo el provider
const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    return(
        <CartContext.Provider value={{cart}}>
            {children}
        </CartContext.Provider>
    )
}