import React from "react";

import Container from 'react-bootstrap/Container';
import {Nav, Navbar, Button} from 'react-bootstrap';


function Header() {
  return (
    <Navbar data-bs-theme="light">
        <Container className="bg-white">
            <Navbar.Brand href="/" className="fs-2 fw-bolt my-auto">LOGO</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link href="#above-us" className="my-auto">Above us</Nav.Link>
                <Nav.Link href="#contacts" className="my-auto">Contacts</Nav.Link>
                <Button className="rounded-pill my-auto py-1 ms-3 bg-orange">
                    <Nav.Link href="#login">Login</Nav.Link>
                </Button>
            </Nav>
        </Container>
    </Navbar>
  );
}

export default Header;