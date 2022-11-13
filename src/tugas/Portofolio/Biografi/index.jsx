import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default class Biografi extends React.Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Anis Supriatin</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="">Biografi</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>

            
            
        )
    }
}