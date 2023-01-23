import React from 'react';
import { NavLink } from 'react-router-dom';
const ImageWithLink = (props) => {
    return (
        
        <NavLink to={props.path}>
            <img src={props.src} alt={props.alt} />
        </NavLink>
        
    );
};

export default ImageWithLink;