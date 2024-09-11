import React from "react";
import "./avatarcss.css";

function Avatar(props){
    return(
        <img className="avatar" src={props.link} alt={props.name}></img>
    );
}

export default Avatar;