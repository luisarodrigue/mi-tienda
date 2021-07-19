import React, { useContext } from 'react';
import {ReactComponent as Carrito} from './Carrito.svg';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'
import ListGroup from 'react-bootstrap/esm/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


const CartWidget = () => {

    const cart = useContext(CartContext);
    
    const prop = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Cart List Item</Popover.Title>
          <Popover.Content>
              {
                cart.cartSize===0? (<b>No hay Items</b>) :
                    cart.carrito.map(({item, quantity})=>{
                        return (
                            <p>{`${item.name.slice(0, 10)}${item.length>11? '...': ''} x ${quantity}`}</p>
                        )
                    })
              }
          </Popover.Content>
        </Popover>
    );

    return cart.cartSize!=0 && (
    <OverlayTrigger placement="bottom" overlay={prop}>
    <div style={{
        position: 'relative',
        padding: '12',
        width: 40
    }}>
        <Link to='/cart' className='d-flex carrito'>
            <Carrito></Carrito>
        </Link>
        <div className='count'>
            <label style={{
                color: 'black'
            }}>{cart.cartSize}</label>
        </div>
    </div>
    </OverlayTrigger>)
}

export default CartWidget