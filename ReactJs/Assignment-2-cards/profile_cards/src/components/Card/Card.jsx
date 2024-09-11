import React from "react";
import Avatar from "../Avatar/Avatar.jsx";
import "./cardcss.css";

function Card(props){
    return (
        <div className="card">
            <Avatar link={props.link} alt={props.name}/>
            <div className="profession">{props.profession}</div>
            <div className="small">{props.income}</div>
            <div className="name">{props.name}</div>
            <div className="address">{props.address}</div>
            <div className="moreInfo">{props.moreInfo}</div>
            <button className="unfill">VIEW CV</button>
            <button className="fill">MAKE OFFER</button>
            {(props.status==="online")?(<div className="status"><div className="online"></div>Online</div>):<div className="status">{props.status}</div>}
        </div>
    );
}

export default Card;