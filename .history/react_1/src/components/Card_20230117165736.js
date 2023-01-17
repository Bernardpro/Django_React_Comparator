import React from 'react';
import '../styles/components/_card.scss'
const Card = (props) => {
    return (
    <li className="card">
        <img src={props.url_image} alt="Jean image" className="imgCard" />
        <div className="textCard">
            <div className="nameCard">
            <a href={props.url}>{props.name}</a>
            </div>
            <div className="priceCard">
            <span>{props.price}€</span>
            </div>
        </div>
    </li>
  );      
};

export default Card;