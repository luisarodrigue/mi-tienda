import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './Cart.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './ItemCart/CartItem';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import { getFirestore } from '../../firebase/firebase';
import firebase from 'firebase/app';
import '@firebase/firestore';



function Cart() {
    const buyer={name: "usuario de prueba", phone: 3137897895, email: "estecorreono@esreal.xd"};

    const cart = useContext(CartContext);
    const [lista, setLista] = useState([]);

    
    useEffect(() => {
        const aux = cart.carrito.map((item, index)=>{
            return <CartItem key={index} item={item.item} cant={item.quantity} onDel={cart.removeItem}/>
        });

        console.log(aux);
        setLista(aux);
    }, [cart]);

    function submit(){
        const db = getFirestore();
        const orders = db.collection('orders');

        const sub = cart.subTotal();
        const newOrder = {
            buyer,
            items: cart.carrito.map((item)=>{
                return item.item;
            }),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: sub
        };

        console.log(newOrder);

        orders.add(newOrder);

        const items = db.collection('productos')
        .where(firebase.firestore.FieldPath.documentId(), 'in' , cart.carrito.map(i => i.item.id));

        items.get().then((query)=>{
            const batch = db.batch();

            query.docs.forEach((doc)=>{
                if(doc.data().stock >= cart.carrito.quantity){
                    batch.update(doc.ref, {stock: doc.data().stock - cart.carrito.quantity});
                }
            });
        });

    }

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
                    <Row>
                        SubTotal: ${cart.subTotal()}
                        <Button onClick={submit}>Terminar compra</Button>
                    </Row>
                </>)
                }
            </Container>
        </div>
    )
}

export default Cart
