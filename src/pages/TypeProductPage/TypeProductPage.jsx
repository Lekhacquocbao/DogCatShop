import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Col, Row } from 'antd';

const TypeProductPage = () => {
    return (
        <Row style={{padding: '0 120'}}>
            <Col span={6}>
                <NavbarComponent></NavbarComponent>
            </Col>
            <Col span={18}>
                <CardComponent></CardComponent>
            </Col>
        </Row>
    );
}

export default TypeProductPage;