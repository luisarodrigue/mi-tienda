import React from 'react'

export default Item = ({ item }) => {

    let {name, precio, stock} = item;
    return (
        <Cards name={name} precio={precio} stock={stock}>
            
        </Cards>
    )
}
