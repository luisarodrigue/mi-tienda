import React, { useState, useEffect } from 'react'
import {getFormatProducts} from '../../utils/resources'
import {ItemList} from '../ItemList/ItemList';

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async function(){
            let aux = await getFormatProducts('reloj');
            setProducts(aux);
        })();
    }, []);

    return (
        <div className="itemListContainer">
            {
                products.lenght <= 0? 
                (<h2> {props.greeting} </h2>) : 
                (<ItemList items={products}/>)
            }
        </div>
    )

}
