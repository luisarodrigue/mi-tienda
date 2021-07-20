import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

export default function Cards({id, name, precio, stock, img }) {
    function onAdd(count){
        console.log(`se compraron ${count} unidades`);
        alert(`se compraron ${count} unidades`)
    }
    return (
        <div>
            <Link to={`item/${id}`} style={{color: 'black', textDecorationLine: 'none'}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} style={{maxHeight: '18rem'}} alt='no img detected'/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       ${precio} stock: {stock}
                    </Card.Text>
                    <ItemCount stock={stock} onAdd={onAdd}/>
                    
                </Card.Body>
            </Card>
        </Link>
        </div>
    )
}
