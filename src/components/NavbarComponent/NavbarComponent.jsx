import React from 'react';
import { WrapperContent, WrapperLabelText, WrapperTextValue } from './style';
import { Checkbox, Col, Rate, Row } from 'antd';

const NavbarComponent = () => {
    const onChange = () => {}
    const renderContent = (type, options) => {
        switch(type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return(
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                            {options.map((option) => {
                                return (
                                    <Checkbox value={option.value}>{option.label}</Checkbox>
                                )
                            })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                        return (
                            <>
                                <span></span>
                                <Rate style={{fontSize :'12px'}} disabled defaultValue={option}></Rate>
                            </>
                        )
                    })
            default:
                return {}
        }
    }

    return (
        <div>
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['Meo', 'Cho', 'Chim'])}

            </WrapperContent>
            <WrapperContent>
                {renderContent('checkbox', [
                        {value: 'a' ,label: 'A'},
                        {value: 'b' ,label: 'B'},
                    ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star',[3,4,5])}
            </WrapperContent>
        </div>
    );
}

export default NavbarComponent;