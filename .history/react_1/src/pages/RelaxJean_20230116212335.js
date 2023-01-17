import React from 'react';
import Nav from '../components/Nav';
import MainImage from '../components/MainImage';
import Jeans from '../components/Jeans';
const RippedJean = () => {
    return (
        <div>
            <Nav/>
            <MainImage slogan ="Trouver le jean qui vous convient !" title="Bernard's Comparator"/>
            <Jeans/>
            <Footer/>
        </div>
    );
};

export default RippedJean;