import { Profile } from "../../types/profile.type.js";
import Avatar from '@mui/material/Avatar';
import "./cardcss.css";
import Featured from "../Featured/Featured.js";

function Card(props: {profile: Profile}){
    const openLinks = function(){
        window.open(props.profile.cvlink, '_blank')
    }
    return (
        <a href={`/card_details/${props.profile.id}`}>
        <div className="card">
            <div className="top">
                <Featured class="star" featured = {props.profile.featured}/>
                <Avatar alt={props.profile.name} src={`${props.profile.profileImage||"/images/image.png"}`} sx={{ width: "100px", height: "100px", margin:"10px", '& img':{width: "100%", height: "120%", objectFit: "cover"} }} />
                <div className="bold">{props.profile.profession}</div>
                <div className="bold small gray space10">{props.profile.skills.join(', ')}</div>
            </div>
            <div className="bottom">
                <div className="bold space10">{props.profile.name}</div>
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
                    </svg>{props.profile.location}</div>
                <div className="gray small space20">{props.profile.info}</div>
                <button className="unfill" onClick={openLinks}>VIEW CV</button>
                <button className="fill">MAKE OFFER</button>
                {(props.profile.status==="online")?<div className="status lightGray tiny bold space10"><div className="dot online" />Online</div>:<div className="status lightGray tiny bold space10"><div className="dot offline" />Last seen: {(()=>{
                    if(props.profile.lastSeen){
                        const lastseen = new Date(props.profile.lastSeen);
                        const current = new Date();
                        const timeSince = current.getTime() - lastseen.getTime();
                        const minutesSince = Math.floor(timeSince/(1000*60));
                        const hoursSince = Math.floor(timeSince/(1000*60*60));
                        const daysSince = Math.floor(timeSince/(1000*60*60*24));
                        return (daysSince >= 1)?((daysSince > 7)?`Several days ago`:`${daysSince} days ago`):((hoursSince >= 1)?`${hoursSince} hours ago`:`${minutesSince} minutes ago`);
                    }
                })()}</div>}
            </div>
        </div>
        </a>
    );
}

export default Card;