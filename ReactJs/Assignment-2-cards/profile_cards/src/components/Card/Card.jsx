import React from "react";
import Avatar from "../Avatar/Avatar.jsx";
import "./cardcss.css";

function Card(props){
    const openLinks = function(){
        window.open(props.cvlink, '_blank')
    }
    return (
        <div className="card">
            <div className="top">
                <div className="star"><img src={(props.featured)?`${process.env.PUBLIC_URL}/star.png`:`${process.env.PUBLIC_URL}/unstar.png`} alt="star" /></div>
                <Avatar link={(props.profileImage === null)?'image.png':props.profileImage} alt={props.name}/>
                <div className="bold">{props.profession}</div>
                <div className="bold small gray">{props.income}</div>
            </div>
            <div className="bottom">
                <div className="bold space10">{props.name}</div>
                <div className="bold gray small locationSpace"><svg 
                        fill="gray" 
                        version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlnsXlink="http://www.w3.org/1999/xlink" 
                        width="12px" 
                        height="12px" 
                        viewBox="0 0 395.71 395.71" 
                        xmlSpace="preserve"
                    >
                        <g>
                            <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 
                            c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 
                            C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 
                            c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                        </g>
                    </svg>{props.location}</div>
                <div className="gray small space20">{props.info}</div>
                <button className="unfill" onClick={openLinks}>VIEW CV</button>
                <button className="fill">MAKE OFFER</button>
                {(props.status==="online")?<div className="status lightGray tiny bold space10"><div className="online"></div>Online</div>:<div className="status lightGray tiny bold space10">Last seen: {props.status}</div>}
            </div>
        </div>
    );
}

export default Card;