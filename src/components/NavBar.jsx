import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";


export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Tienda Yapu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Celulares</Nav.Link>
            <Nav.Link href="#features">Computadoras</Nav.Link>
            <Nav.Link href="#pricing">Tablets</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
}
