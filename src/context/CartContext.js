import React, { useState } from "react";


export const CartContext = React.createContext([]);

export function CartProvider({value = [], children}) {
    
    const [carrito, setCarrito] = useState(value);
    
    function isInCart(id){
        if(id){
            if(carrito.slice().find((item)=> item.item.id===id)){
                return true;
            }
            return false;
        }
    }

    function addItem(item) {
        console.log(item);
        const prod = item && item.item;
        if(isInCart(prod && prod.id)){
            console.log(`${prod && prod.name} no pudo ser añadido ya que ya existe`);
            return;
        }
        setCarrito([...carrito, item]);
        console.log(`an item was added: ${prod}`);
        console.log(carrito)
    }

    function removeItem(id){
        const cart = carrito.slice();

        const index = cart.findIndex((item)=> item.item.id===id);

        if(index+1){
            cart.splice(index, 1);
            setCarrito(cart);
        }
    }

    function clear() {
        setCarrito([]);
    }
    return (
        <CartContext.Provider value={{carrito, addItem, clear, removeItem, isInCart, cartSize: carrito.length}}>
            {children}
        </CartContext.Provider>
    )
}
