import React from 'react';
import {ReactComponent as Carrito} from './Carrito.svg';

const CartWidget = () => {
    return (
        <button className ='btn d-flex' type='button'><Carrito></Carrito></button>
    )
}

export default CartWidget