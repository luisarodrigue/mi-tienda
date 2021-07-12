import React from 'react'
import Cards from '../Cards/Cards';
import CardGroup from 'react-bootstrap/CardGroup'

export const ItemList = ({ items }) => {

    let itemList = items.map((item) => {
        return (
            <Cards key={item.id} name={item.name} precio={item.precio} stock={item.stock} img={item.img} id={item.id}/>
        );
    });
    return (
        <CardGroup>
            {itemList}
        </CardGroup>
    )
}
