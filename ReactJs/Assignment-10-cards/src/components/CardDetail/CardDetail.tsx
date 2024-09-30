import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileDetail } from "../../types/profile.type";
import "./cardDetail.css";
import { Avatar, Chip } from "@mui/material";
import Featured from "../Featured/Featured";
import Skill from "../Skill/Skill";

const defaultProfileDetail = {
    id:"",
    cvlink: "",
    featured: false,
    profileImage: "",
    name: "",
    profession: "",
    skills: [],
    location: "",
    info: "" ,
    status: "",
    lastSeen: ""
};

const CardDetail = () =>{
    const { id } = useParams()
    console.log(id);
    const [cardDetail, setCardDetail] = useState<ProfileDetail>(defaultProfileDetail);

    useEffect(()=>{
        const fetchProfile = async() => {
            if(id){
                const response = await fetch('/profiles.json');
                const profiles = await response.json();
                const profile = profiles.find((profile:any) => profile.id === parseInt(id));
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
                    {/* <div className="mapArea">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61143.45271504571!2d74.22315137806058!3d16.703594883517663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727700620058!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
                    </div> */}
                </div>
                <div className="box innerBox right">
                    <div className="info">{cardDetail.info}</div>
                    <div className="innerBox space10">
                        <div className="detail_head">Skills</div>
                        <div className="skillList">
                            {cardDetail.skills.map(skill => <Chip className="space10" label={skill}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CardDetail;