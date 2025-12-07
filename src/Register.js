import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './Mainpage.css';

import { Container, Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Form, FormGroup, Label, Input, Button, FormText, Card } from 'reactstrap';


function Register() {
    return (

        <div>
            <section className='background'>
                <Container className='flex-center'>
                    <section className='flex-border'>

                        <Col className='flex-container '>
                            <div className='icon-logo'></div>
                        </Col>
                        <Col>
                            <h1 className='center heading-sub'>Welcome</h1>
                            <h2 className='center heading-main'>Association of Computer Science</h2>
                        </Col>




                    </section>

                </Container>
            </section>

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
                                        href="C:\Users\memory\NFC-Reader-Website\src\Officers.js"
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

                            <Col lg="8" className='form-container'>
                                <Card className='form-card-container'>
                                    <h1 className='form-heading'>Member's Information</h1>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                Full Name
                                            </Label>
                                            <Input
                                                id="exampleEmail "
                                                className='form-input'
                                                name="email"
                                                placeholder="Enter Full Name"
                                                type="email"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                Course
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                className='form-input'
                                                name="email"
                                                placeholder="Enter Course"
                                                type="email"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Year Level
                                            </Label>
                                            <Input
                                                id="exampleSelect"
                                                className='form-input select-input'
                                                name="select"
                                                type="select"
                                            >
                                                <option className='select-hover'>
                                                    1
                                                </option>
                                                <option className='select-hover'>
                                                    2
                                                </option>
                                                <option className='select-hover'>
                                                    3
                                                </option>
                                                <option className='select-hover'>
                                                    4
                                                </option>
                                                <option className='select-hover'>
                                                    5
                                                </option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleEmail">
                                                NFCID
                                            </Label>
                                            <Input
                                                id="exampleEmail"
                                                name="email"
                                                className='form-input'
                                                placeholder="Enter NFCID Number"
                                                type="email"
                                            />
                                        </FormGroup>

                                        <Button className='add-member-button'>
                                            Add Member
                                        </Button>
                                    </Form>
                                </Card>
                            </Col>

                        </Col>
                    </Row>

                </Container>
            </section >
        </div>

    );
}

export default Register;
