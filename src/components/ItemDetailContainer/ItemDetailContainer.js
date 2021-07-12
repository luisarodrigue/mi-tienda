import React, { useEffect, useState } from 'react'
import { getFormatProduct } from '../../utils/resources';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router';

export const ItemDetailContainer = () => {

    const {id} = useParams();

    const [item, setItem] = useState();
    
    useEffect(()=>{
        (async () => {
            let ans = await getFormatProduct(id);//aquí va la id del producto a consultar MCO551622386
            setItem(ans)
        })();
    },[id])

    return (
        <section className="ItemDetailContainer">
            {item? <ItemDetail item={item}/> : <Spinner animation="border" variant="warning" />}
        </section>
    )
}
