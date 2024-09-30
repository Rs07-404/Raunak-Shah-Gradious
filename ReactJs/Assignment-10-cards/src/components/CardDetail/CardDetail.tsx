import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileDetail } from "../../types/profile.type";
import "./cardDetail.css";
import { Avatar, Chip } from "@mui/material";
import Featured from "../Featured/Featured";
import TimeLine from "../TimeLine/TimeLine";

const defaultProfileDetail = {
    id: -1,
    name: "",
    profession: "",
    location: "",
    profileImage: "",
    locationLink: "",
    email: "",
    phone: "",
    linkedIn: "",
    github: "",
    portfolio: "",
    info: "",
    cvlink: "",
    experience: [{
        role: "",
        company: "",
        years: ""
    }],
    education: [{
        degree: "",
        institution: "",
        years: ""
    }],
    certifications: ["",""],
    skills: ["",""],
    status: "",
    bio: "",
    featured: null,
    lastSeen: ""
};


const CardDetail = () =>{
    const { id } = useParams()
    console.log(id);
    const [cardDetail, setCardDetail] = useState<ProfileDetail>(defaultProfileDetail);
    const openLinks = function(){
        window.open(cardDetail.cvlink, '_blank')
    }

    useEffect(()=>{
        const fetchProfile = async() => {
            if(id){
                const response = await fetch('/profiles.json');
                const profiles = await response.json();
                const profile = profiles.find((profile:ProfileDetail) => profile.id === parseInt(id));
                console.log(profile);
                setCardDetail(profile);
            }
            console.log(cardDetail);
        }
        fetchProfile();
    }, [id]);



    return(
        <div className="detailBox">
            <div className="box details">
                <div className="box innerBox left">
                    <Featured class="star_card_details" featured={cardDetail.featured} />
                    <Avatar alt={cardDetail.name} src={`${cardDetail.profileImage||"/images/image.png"}`} sx={{ width: "140px", height: "140px", margin:"10px", '& img':{width: "100%", height: "120%", objectFit: "cover"} }} />
                    <div className="bold">{cardDetail.name}</div>
                    <div className="small space10 bold">{cardDetail.profession}</div>
                    <div className="small bold gray space10 centre">{cardDetail.info}</div>
                    <div className="small centre space10 bold">{cardDetail.bio}</div>
                    <button className="unfill" onClick={openLinks}>VIEW CV</button>
                    <button className="fill">MAKE OFFER</button>
                    {(cardDetail.status==="online")?<div className="status lightGray tiny bold space10"><div className="dot online" />Online</div>:<div className="status lightGray tiny bold space10"><div className="dot offline" />Last seen: {(()=>{
                    if(cardDetail.lastSeen){
                        const lastseen = new Date(cardDetail.lastSeen);
                        const current = new Date();
                        const timeSince = current.getTime() - lastseen.getTime();
                        const minutesSince = Math.floor(timeSince/(1000*60));
                        const hoursSince = Math.floor(timeSince/(1000*60*60));
                        const daysSince = Math.floor(timeSince/(1000*60*60*24));
                        return (daysSince >= 1)?((daysSince > 7)?`Several days ago`:`${daysSince} days ago`):((hoursSince >= 1)?`${hoursSince} hours ago`:`${minutesSince} minutes ago`);
                    }
                })()}</div>}
                </div>
                <div className="box innerBox right">
                        <div className="detail_head">Skills</div>
                        <div className="skillList">
                            {cardDetail.skills.map(skill => <Chip className="space10" label={skill}/>)}
                        </div>
                        {(cardDetail.certifications != null)?<><div className="detail_head">Certifications</div>
                        <div className="skillList">
                            {cardDetail.certifications.map(skill => <Chip className="space10" label={skill}/>)}
                        </div></>:<></>}
                        <div className="detail_head">experience</div>
                        <div className="experiences">
                            <TimeLine name="experience" experiences = {cardDetail.experience}/>
                        </div>
                        <div className="detail_head">Education</div>
                        <div className="experiences">
                            <TimeLine name="education" educations = {cardDetail.education}/>
                        </div>
                        <div className="detail_head">Location</div>
                        <div className="mapArea">
                            <iframe className="map" src={cardDetail.locationLink} loading="lazy"></iframe>
                        </div>
                    </div>
            </div>
        </div>
    )

}

export default CardDetail;