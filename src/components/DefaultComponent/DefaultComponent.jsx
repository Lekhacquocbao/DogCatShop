import React from "react";
import HeaderComponent from '../HeaderComponent/HeaderComponent'

const HomePage = ({children}) => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            {children}
        </div>
    )
}

export default HomePage