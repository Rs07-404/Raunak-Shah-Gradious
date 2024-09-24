import React from "react";
import "./avatarcss.css";

function Avatar(props){
    return(
        <div className="avatar">
            <img src={props.link} alt={props.name} />
        </div>
    );
}

export default Avatar;