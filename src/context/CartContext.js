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
        const prod = item && item.item;
        if(isInCart(prod && prod.id)){
            console.log(`${prod && prod.name} no pudo ser añadido ya que ya existe`);
            return;
        }
        setCarrito([...carrito, item]);
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

    function subTotal(){
        const cart = carrito.slice();
        return cart.reduce((acum, item)=>{
            return acum + item.item.precio * item.quantity;
        }, 0);
    }

    return (
        <CartContext.Provider value={{carrito, addItem, clear, removeItem, isInCart, subTotal, cartSize: carrito.length}}>
            {children}
        </CartContext.Provider>
    )
}
