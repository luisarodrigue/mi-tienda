import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Item from 'react-bootstrap/ListGroupItem';
import Image from 'react-bootstrap/Image';

function CartItem({item, cant, onDel}) {


    return (
        <Item className='cart-item'>
            <Image src={item.img} thumbnail/>
            <div>
                <b>
                    {item.name}
                </b>
                <b>${item.precio} x {cant}</b>
                <Button size="sm" onClick={()=>onDel(item.id)}>DEL</Button>
            </div>
        </Item>
    )
}

export default CartItem
