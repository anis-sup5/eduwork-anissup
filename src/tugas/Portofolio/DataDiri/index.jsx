import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

export default class DataDiri extends React.Component {
    render(){
        return(
            <div style={{height: '30rem', backgroundColor:'#FFD700'}}>
                <Container>
                    <Row >
                        <Col className="mt-5 text-center text-secondary" >
                            <h3>MERN Student</h3>
                            <h1>ANIS SUPRIATIN</h1>
                            <a href="https://www.linkedin.com/in/anis-supriatin-62b4b518b/" target="_blank" rel="noopener noreferrer"><Button variant="outline-dark">Linkedin Profile</Button></a>
                            
                        </Col> 
                    </Row>
                </Container>
            </div>
  
        )
    }
}