import { Col, Image, Row } from 'antd';
import React from 'react';
import imageProduct1 from '../../assets/images/product1.jpg'
import small1 from '../../assets/images/small1.jpg'
import { WrapperStyleColImage, WrapperStyleImageSmall } from './style';

const ProductDetailComponent = () => {
    return (
            <Row style={{padding: '16px', background: '#fff'}}>
                <Col span={10}>
                    <Image src={imageProduct1} alt='image product' preview={false} ></Image>
                    <Row style={{paddingTop: '10px', justifyContent: 'space-between'    }}>
                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={small1} alt='image small' preview={false} ></WrapperStyleImageSmall>
                        </WrapperStyleColImage>

                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={small1} alt='image small' preview={false} ></WrapperStyleImageSmall>
                        </WrapperStyleColImage>

                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={small1} alt='image small' preview={false} ></WrapperStyleImageSmall>
                        </WrapperStyleColImage>

                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={small1} alt='image small' preview={false} ></WrapperStyleImageSmall>
                        </WrapperStyleColImage>

                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={small1} alt='image small' preview={false} ></WrapperStyleImageSmall>
                        </WrapperStyleColImage>

                        <WrapperStyleColImage span={4}>
                            <WrapperStyleImageSmall src={small1} alt='image small' preview={false} ></WrapperStyleImageSmall>
                        </WrapperStyleColImage>

                    </Row>
                </Col>
                <Col span={14}>Hhehehe</Col>
            </Row>
    );
}

export default ProductDetailComponent;