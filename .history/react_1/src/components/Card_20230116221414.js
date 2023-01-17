import React from 'react';

const Card = ({jean}) => {
    return (
    <li className="card">
        <img src={jean.url_image} alt="Jean image" />
        <div className="imgCard">
            <a href={jean.url}>{jean.name}</a>
        </div>

        
    </li>
  );      
};

export default Card;