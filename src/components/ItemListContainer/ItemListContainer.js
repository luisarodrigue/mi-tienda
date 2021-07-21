import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom';
import {getFormatProducts, getProductByCategory} from '../../utils/resources'
import {ItemList} from '../ItemList/ItemList';

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const {id} = useParams();
    useEffect(() => {
        (async function(){
            let aux = await (id? getProductByCategory(id) : getFormatProducts(''));
            console.log(aux);
            setProducts(aux);
        })();
    }, [id]);

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
