import React from 'react'
import Cards from '../Cards/Cards'

export const ItemListContainer = (props) => {
    const product= {
        name: 'Guante', 
        precio: 25.700,
        stock: 30
}
    return (
        <>
            <h2> {props.greeting} </h2>
            <Cards name={product.name} precio={product.precio} stock={product.stock} />
        </>
    )

}
