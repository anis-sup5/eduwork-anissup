import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from "react-bootstrap";

export default class Contact extends React.Component{
    render(){
        return(
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/100px180" />
                <Card.Body>
                    <Card.Title>Contact Anis Supriatin</Card.Title>
                    <Card.Text>
                    Cijantung Ciracas
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Email</ListGroup.Item>
                    <ListGroup.Item>Instagram</ListGroup.Item>
                    <ListGroup.Item>GitHub</ListGroup.Item>
                </ListGroup>
                
                </Card>

            </div>
        )
    }
}