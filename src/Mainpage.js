import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './Mainpage.css';
import { Container, Row, Col } from "reactstrap";

function Main() {
    return (
        <section className='background'>
            <Container>
                <Row>
                    <div className='icon-logo'></div>
                </Row>
            </Container>
        </section>

    );
}

export default Main;
