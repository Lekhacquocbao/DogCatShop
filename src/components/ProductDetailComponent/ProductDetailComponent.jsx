import { Col, Image, Row } from 'antd';
import React from 'react';
import imageProduct1 from '../../assets/images/product1.jpg'
import small1 from '../../assets/images/small1.jpg'
import { WrapperAddressProduct, WrapperBtnQualityProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style';
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';

const ProductDetailComponent = () => {
    const onChange = () => {

    }
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

                <Col span={14}>
                    <WrapperStyleNameProduct>
                        Mr Tươi
                    </WrapperStyleNameProduct>
                    <div>
                        <StarFilled style={{fontSize: '12px', color: 'yellow'}} />
                        <StarFilled style={{fontSize: '12px', color: 'yellow'}} />
                        <StarFilled style={{fontSize: '12px', color: 'yellow'}} />
                        <WrapperStyleTextSell> | Da ban 1000+ </WrapperStyleTextSell>
                    </div>
                    <WrapperPriceProduct>
                        <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperAddressProduct>
                        <span>Giao đến </span>
                        <span className='address'>Q. Liên Chiểu, Đà Nẵng </span>
                        <span className='change-address'>- Đổi địa chỉ</span>
                    </WrapperAddressProduct>
                    <div>
                        <div>Số lượng</div>
                        <WrapperQualityProduct>
                                <MinusOutlined style={{color: '#000', fontSize: '20px'}} />
                                <WrapperInputNumber defaultValue={3} onChange={onChange} size='small' />
                                <PlusOutlined style={{color: '#000', fontSize: '20px'}} />
                        </WrapperQualityProduct>
                    </div>
                </Col>
            </Row>
    );
}

export default ProductDetailComponent;