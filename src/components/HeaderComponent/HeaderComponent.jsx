import React from "react";
import {Badge, Col} from 'antd'
import {
    WrapperHeader, 
    WrapperTextHeader,
    WrapperHeaderAccount,
    WrapperTextHeaderSmall
} from './style'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import {
    UserOutlined, 
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons'

const HeaderComponent = () => {
    return (
        <div style={{ width: '100%', background: 'rgb(26,148,255', display: 'flex', justifyContent: 'center'}}>
            <WrapperHeader>
            <Col span={5}>
                <WrapperTextHeader>BH SHOP</WrapperTextHeader>
            </Col>
            <Col span={13}>
                <ButtonInputSearch 
                    size="large"
                    bordered={false}
                    textButton="Tìm kiếm"
                    placeholder="Tìm kiếm thú cưng mong muốn..."
                >
                </ButtonInputSearch>
            </Col>
            <Col span={6} style={{display: 'flex', gap: '54px', alignItems: 'center'}}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize: '30px'}}></UserOutlined>
                    <div>
                        <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                        <div>
                            <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                            <CaretDownOutlined></CaretDownOutlined>
                        </div>
                    </div>
                </WrapperHeaderAccount>
                <div>
                    <Badge count={8} size="small">
                        <ShoppingCartOutlined style={{fontSize: '30px', color: 'white'}}></ShoppingCartOutlined>
                    </Badge>
                    <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                </div>
            </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent