import React from 'react';

const Card = (props) => {
    return (
    <li className="card">
        <a href={props.url_image}>lien image</a>
        <img src={props.url_image} alt="Jean image" className="imgCard" />
        <div className="textCard">
            <a href={props.url}>{props.name}</a>
            <span>{props.price}&#8364</span>
        </div>
    </li>
  );      
};

export default Card;