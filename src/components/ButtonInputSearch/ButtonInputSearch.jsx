import React from "react";
import {SearchOutlined} from '@ant-design/icons'
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
    const {
        size, 
        placeholder, 
        textButton, 
        bordered, 
        backgroundColorInput = '#fff', 
        backgroundColorButton = 'rgb(13,92,182)',
        colorButton = '#fff'
    } = props
    return (
        <div style={{display: 'flex'}}>
            <InputComponent
                size={size} 
                placeholder={placeholder} 
                bordered={bordered}
                style={{backgroundColor: backgroundColorInput, borderRadius: 0}}
            />
            <ButtonComponent
                size={size} 
                style={{background : backgroundColorButton, border: !bordered && 'none',borderRadius: 0}}
                icon={<SearchOutlined color={colorButton} style={{color: '#fff'}} />}
                textButton={textButton}
                styteTextButton={{color: colorButton}}
            />
        </div>
    )
}

export default ButtonInputSearch