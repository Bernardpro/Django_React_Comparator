import React from 'react';
import '../styles/components/_card.scss'
const Card = (props) => {
    return (
    <li className="card">
        <img src={props.url_image} alt="Jean image" className="imgCard" />
        <div className="textCard">
            <div>
            <a href={props.url} div className="nameCard">{props.name}</a>
            </div>
            <div>
            <span className="priceCard">{props.price}€</span>
            </div>
        </div>
    </li>
  );      
};

export default Card;