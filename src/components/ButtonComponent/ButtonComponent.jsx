import React from "react";
import { Button } from "antd";

const ButtonComponent = ({
        size, 
        styleButton,
        styleTextButton,
        textButton,
         ...rests
        }) => {
            
    return (
        <Button 
        size={size} 
        style={{styleButton,borderRadius: 0}}
        {...rests}
        ><span style={styleButton} >{textButton}</span>
        </Button>
    )
}

export default ButtonComponent 