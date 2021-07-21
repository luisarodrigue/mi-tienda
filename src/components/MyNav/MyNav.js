import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/esm/Button';
import CartWidget from '../CartWidget/CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';

const categories = ['prueba', 'prueba2'];
export const MyNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>La ToTo Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                            {
                                categories.map((category)=>{
                                    return <NavDropdown.Item 
                                    as={Link}
                                    key = {category} 
                                    to={`/category/${category}`}
                                    >{
                                        category
                                    }</NavDropdown.Item>
                                })
                            }
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="success">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <CartWidget/>
                </Nav>
            </Container>
        </Navbar>
    )
}
