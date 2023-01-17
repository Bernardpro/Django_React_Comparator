import React from 'react';

const Card = ({jean}) => {
    return (
    <li className="card">
        <img src={jean.url_image} alt="Jean image" className="imgCard" />
        <div className="textCard">
            <a href={jean.url}>{jean.name}</a>
            <span>{jean.price}</span>
        </div>
    </li>
  );      
};

export default Card;