import Card from '../Card/Card';
import { Profile } from '../../types/profile.type';
import { useEffect, useState } from 'react';

const defaultProfile = [{
    id:-1,
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
}];


const Home = ()=>{
    const [profiles, setsetProfiles] = useState<Profile[]>(defaultProfile);
    useEffect(()=>{
        const fetchProfile = async() => {
            const response = await fetch('/profiles.json');
            const profiles = await response.json();
            setsetProfiles(profiles);
        }
        fetchProfile();
    }, []);
    return(
        <div className="App">
            {profiles.map((Detailedprofile) => {
                const profile: Profile = {
                    id: Detailedprofile.id,
                    cvlink: Detailedprofile.cvlink,
                    featured: Detailedprofile.featured,
                    profileImage: Detailedprofile.profileImage,
                    name: Detailedprofile.name,
                    profession: Detailedprofile.profession,
                    skills: Detailedprofile.skills,
                    location: Detailedprofile.location, 
                    info: Detailedprofile.info,
                    status: Detailedprofile.status,
                    lastSeen: Detailedprofile.lastSeen || null
                }
                return <Card profile={profile} />
                })}
        </div>
    )
}

export default Home;