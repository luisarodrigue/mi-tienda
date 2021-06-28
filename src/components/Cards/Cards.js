import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Cards({ name, precio, stock }) {
    function onAdd(count){
        console.log(`se compraron ${count} unidades`);
        alert(`se compraron ${count} unidades`)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       ${precio} stock= {stock}
                    </Card.Text>
                    <ItemCount stock={stock} onAdd={onAdd}/>
                    
                </Card.Body>
            </Card>
        </div>
    )
}
