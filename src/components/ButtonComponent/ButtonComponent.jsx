import React from "react";
import { Button } from "antd";

const ButtonComponent = ({
        size, 
        styteButton,
        styteTextButton,
        textButton,
         ...rests
        }) => {
            
    return (
        <Button 
        size={size} 
        style={{styteButton,borderRadius: 0}}
        {...rests}
        // icon={<SearchOutlined style={{color: colorButton}} />}
        ><span style={styteButton} >{textButton}</span>
        </Button>
    )
}

export default ButtonComponent 