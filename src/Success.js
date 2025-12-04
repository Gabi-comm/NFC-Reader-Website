import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './Success.css';
import { Container, Row, Col } from "reactstrap";

function Success() {
    return (
        <section className='background'>
            <Container className='flex-center'>
                <section className='flex-border'>
                    <Row>
                        <Col className='flex-container '>
                            <div className='icon-logo'></div>
                        </Col>
                        <Col>
                            <h1 className='center heading-sub'>Welcome</h1>
                            <h2 className='center heading-main'>Association of Computer Science</h2>
                        </Col>
                        <Col>
                            <div className='moab-logo'></div>
                            <a>LogOut</a>
                        </Col>
                    </Row>



                </section>

            </Container>
        </section>

    );
}

export default Success;
