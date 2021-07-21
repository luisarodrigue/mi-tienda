import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './Cart.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './ItemCart/CartItem';
import ListGroup from 'react-bootstrap/esm/ListGroup';

function Cart() {

    const cart = useContext(CartContext);
    const [lista, setLista] = useState([]);

    
    useEffect(() => {
        const aux = cart.carrito.map((item, index)=>{
            return <CartItem key={index} item={item.item} cant={item.quantity} onDel={cart.removeItem}/>
        });

        console.log(aux);
        setLista(aux);
    }, [cart]);

    return (
        <div>
            <Container>
                <Row>
                    <Link to='/'>
                        <span >Back to the list</span>
                    </Link>
                </Row>
                {(cart.cartSize===0)? (<>
                    <h3>NO HAY ITEMS EN EL CARRITO.</h3>
                    <Link to='/'><h3>Volver al Lobby</h3></Link>
                </>) : (<>
                    <Row className="justify-content-center">
                        <div className="position-relative cart">
                            <ListGroup>
                                {lista}
                            </ListGroup>
                        </div>
                    </Row>
                    <Row>SubTotal: ${cart.subTotal()}</Row>
                </>)
                }
            </Container>
        </div>
    )
}

export default Cart
