import React from 'react';
import "./card.css";
function Card(props){
    return(
        <div className="card">
            <h1>{props.text}</h1>
            <img src={props.link} alt={props.alt}/>
        </div>
    );
}

export default Card;