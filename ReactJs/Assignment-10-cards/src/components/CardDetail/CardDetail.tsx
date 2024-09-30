import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileDetail } from "../../types/profile.type";

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
        <h1>{cardDetail.name}</h1>
    )

}

export default CardDetail;