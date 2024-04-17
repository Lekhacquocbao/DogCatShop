import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Col, Row } from 'antd';

const TypeProductPage = () => {
    return (
        <Row>
            <Col>
                <NavbarComponent></NavbarComponent>
            </Col>
            <CardComponent></CardComponent>
        </Row>
    );
}

export default TypeProductPage;