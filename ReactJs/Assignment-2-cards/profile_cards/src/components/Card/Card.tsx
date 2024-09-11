import React from "React";
import Avatar from "../Avatar/Avatar";

function Card(props){
    return (
        <div className="card">
            <Avatar link={props.link} />
            <div className="name">{props.name}</div>
        </div>
    );
}

export default Card;