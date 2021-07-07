import React, { useEffect, useState } from 'react'
import { getFormatProduct } from '../../utils/resources';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import Spinner from 'react-bootstrap/Spinner'

export const ItemDetailContainer = ({itemId}) => {

    const [item, setItem] = useState();
    
    useEffect(()=>{
        (async () => {
            let ans = await getFormatProduct(`MCO551622386`);//aquí va la id del producto a consultar
            setItem(ans)
        })();
    },[])

    return (
        <section className="ItemDetailContainer">
            {item? <ItemDetail item={item}/> : <Spinner animation="border" variant="warning" />}
        </section>
    )
}
