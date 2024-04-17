import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.png';
import slider3 from '../../assets/images/slider3.avif';
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";


const HomePage = () => {
    const arr = [
        'Chihuahua',
        'Dachshund',
        'Poodle',
        'Pug',
        'Alaska',
        'Husky',
        'Pomeranian',
        'Beagle',
        'Shiba'
    ]

    return (
        <>
            <div style={{padding: '0 120px'}}> 
            <WrapperTypeProduct>
                {arr.map((item) => {
                    return(
                        <TypeProduct name={item} key={item}/>
                    )
                })}
            </WrapperTypeProduct>      
            </div>
            <div id="container" style={{backgroundColor : "#efefef", padding: "0 120px", height: '1000px'}}>
                <SliderComponent arrImages={[slider1, slider2, slider3]}></SliderComponent>
                <div style={{marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px'}}>
                    <CardComponent></CardComponent>
                </div>
                <NavbarComponent></NavbarComponent>
            </div>
        </>
        
    )
}

export default HomePage