import React from 'react';
import Nav from '../components/Nav';
import MainImage from '../components/MainImage';
import Jeans from '../components/Jeans';
import Footer from '../components/Footer';
const LargeJean = () => {
    return (
        <div>
            <Nav/>
            <MainImage slogan ="Trouver le jean qui vous convient !" title="Bernard's Comparator"/>
            <Jeans style="Skinny"/>
            <Footer/>
        </div>
    );
};

export default LargeJean;