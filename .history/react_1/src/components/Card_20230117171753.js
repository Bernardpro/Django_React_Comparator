import React from 'react';
import '../styles/components/_card.scss'
const Card = (props) => {
    return (
    <li className="card">
        <img src={props.url_image} alt="Jean image" className="imgCard" />
        <div className="textCard">
            <a href={props.url} div className="nameCard">{props.name}</a>
            <span className="priceCard">{props.price}€</span>
        </div>
    </li>
  );      
};

export default Card;