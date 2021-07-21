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
            <Card style={{ width: '18rem' }}>
                <Link to={`item/${id}`} style={{color: 'black', textDecorationLine: 'none'}}>
                    <Card.Img variant="top" src={img} style={{maxHeight: '18rem'}} alt='no img detected'/>
                </Link>
                <Card.Body>
                    <Link to={`item/${id}`} style={{textDecorationLine: 'none'}}>
                        <Card.Title>{name}</Card.Title>
                    </Link>
                    <Card.Text>
                       ${precio} stock: {stock}
                    </Card.Text>
                    <ItemCount stock={stock} onAdd={onAdd}/>
                    
                </Card.Body>
            </Card>
        </div>
    )
}
