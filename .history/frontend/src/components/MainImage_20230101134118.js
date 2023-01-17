import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/_mainImage.scss';

const MainImage = (props) => {
    return (
        <div id="mainImage">
            <h1>{props.title}</h1>
                <div id="firstLine"></div>
                <h3>{props.slogan}</h3>
        </div>
    );
};

export default MainImage;