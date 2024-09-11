import React from 'react';
import Card from '../Card/Card.tsx';
import cards from "../../links.json";
import "./gallery.css";

function createCard(card){
    return <Card text={card.text} link={card.link} alt={card.alt}/>
}


function Gallery(){
    return (
        <div className="gallery">
        {cards.map((card)=>createCard(card))}
        </div>
    )
}

export default Gallery;