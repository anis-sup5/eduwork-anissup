import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";

export default class Bio extends React.Component {
    render(){
        return (
            <div variant="primary">
                <Container >
                    <Row className="mt-10 text-center">
                        <h1>Bio</h1>
                        <p>Bagaimanpun kondisiku harus ingat ada orangtua dan keluarga yg harusku bahagiakan. Tetap berusaha walaupun oranglain meremehkanku</p>
                        <a href="https://github.com/anis-sup5">GitHub</a>
                    </Row>
                </Container>
            </div>
        )
    }
}