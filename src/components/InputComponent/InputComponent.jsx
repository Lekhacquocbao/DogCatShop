import React from "react";
import { Input } from "antd";

const InputComponent = ({
        size, 
        placeholder, 
        bordered, 
        styte,
         ...rests
        }) => {
            
    return (
       <Input 
            size={size}
            placeholder={placeholder}
            bordered={bordered}
            styte={styte}
            {...rests}
       />
    )
}

export default InputComponent 