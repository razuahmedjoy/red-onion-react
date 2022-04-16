import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo2.png';

import './Header.css'
const Header = () => {
    return (
        <header>
            <Navbar className="shadow-sm py-2" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} width="140px" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center navbar-container d-flex justify-content-center">

                            <NavLink to="/cart"><FontAwesomeIcon icon={faShoppingCart} />
                            </NavLink>
                            <NavLink className="mx-4 my-2" to="/login">Login</NavLink>
                            <NavLink to="/register">
                                <Button variant="danger" className="rounded-pill">Sign up</Button>
                            </NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;