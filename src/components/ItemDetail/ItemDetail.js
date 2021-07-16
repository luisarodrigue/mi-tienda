import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({item}) => {
    console.log(item)

    const [compra, setCompra] = useState(false);
    const cart = useContext(CartContext);

    function onAdd(count){
        setCompra(count);
        console.log(`se han agregado ${count} ${item.name} al carrito.`);
        cart.addItem({item, quantity: count});
    }
    
    return (
        <Container>
            <Row xs={1} md={2}>

                {/* Imagen o carrousel */}
                <Col>
                    <Image src={item.img} fluid></Image>
                </Col>

                {/* Descripción y demás detalles */}
                <Col>
                    <p className='h3' style={{
                        textTransform: 'uppercase',
                        fontSize: '20px'
                        }}>
                        {item.name}
                    </p>
                    <p className='h2 d-flex'>
                        ${item.precio}
                    </p>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p className='h4'>
                                stocks
                            </p>
                            <p>
                                Productos en inventario: {item.stock}
                            </p>
                        </div>
                        <div className='d-flex'>
                            {
                                compra?
                                 (<Link to={'/cart'}><Button>Terminar Compra</Button></Link>) :
                                 (<ItemCount stock={item.stock} onAdd={onAdd}/>)
                            }
                        </div>
                    </div>
                    <hr></hr>
                    <div className='description'>
                        <h5>Descripción</h5>
                        <p style={{textAlign: 'left'}}>{item.description}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
