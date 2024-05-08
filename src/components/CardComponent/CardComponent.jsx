import React from 'react';
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReporText, WrapperStyleTextSell } from './style';
import { StarFilled } from '@ant-design/icons'

const CardComponent = () => {
    return (
        <div>
            <WrapperCardStyle
                hoverable
                headStyle={{width: '200px', height: '200px'}}
                style={{ width: 240 }}
                bodyStyle={{padding: '10px'}}
                cover={<img alt="example" src="https://devo.vn/wp-content/uploads/2023/01/meo-cam-dao.jpg" />}
            >
                <StyleNameProduct>Shiba</StyleNameProduct>
                <WrapperReporText>
                    <span style={{marginRight: '4px'}}>
                        <span>4.6</span> <StarFilled style={{fontSize: '12px', color: 'yellow'}} />
                    </span>
                    <WrapperStyleTextSell>
                        | Đã bán 1000+
                    </WrapperStyleTextSell>
                </WrapperReporText>
                <WrapperPriceText>
                    <span style={{marginRight: '8px'}}>1.000.000 VND</span>
                    <WrapperDiscountText>
                        -5%
                    </WrapperDiscountText>
                </WrapperPriceText>
            </WrapperCardStyle>
        </div>
    );
}

export default CardComponent;