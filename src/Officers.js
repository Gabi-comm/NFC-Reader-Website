import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './Mainpage.css';
import { Container, Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Form, FormGroup, Label, Input, Button, FormText, Card } from 'reactstrap';


function Officers() {
    return (
        <section >
            <Container fluid className='background-color-container'>
                <Row >

                    <Col xs='12' lg='2' className='sidebar-nav'>
                        <section className='logo-section'>
                            <div className='icon-logo-sidebar'></div>
                            <p>Associaton of Computer Studies Students</p>
                        </section>
                        <section>
                            <ListGroup className='list-group '>
                                <ListGroupItem
                                    action
                                    className='list-item '
                                    href="#"
                                    tag="a"
                                >
                                    Register
                                </ListGroupItem>
                                <ListGroupItem
                                    action
                                    className='list-item'
                                    href="#"
                                    tag="a"
                                >
                                    Officers
                                </ListGroupItem>
                                <ListGroupItem
                                    action
                                    className='list-item'
                                    href="#"
                                    tag="a"
                                >
                                    Members
                                </ListGroupItem>
                                <ListGroupItem
                                    action
                                    className='list-item'
                                    href="#"
                                    tag="a"
                                >
                                    Events
                                </ListGroupItem>

                            </ListGroup>
                        </section>
                        <section className='logout-section'>
                            <div className='moab-logo'></div>
                            <a href='#'>Log-Out</a>

                        </section>
                    </Col>

                    <Col xs='12' lg='10' className='bg-dark main-section'>


                    </Col>
                </Row>

            </Container>
        </section >

    );
}

export default Officers;
