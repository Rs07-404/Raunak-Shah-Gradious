import React from "React";

function Avatar(props){
    return(
        <img className="avatar" src={props.link}></img>
    );
}

export default Avatar;