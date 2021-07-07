import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'

export default function Cards({ name, precio, stock, img }) {
    function onAdd(count){
        console.log(`se compraron ${count} unidades`);
        alert(`se compraron ${count} unidades`)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} style={{maxHeight: '18rem'}}/>
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
