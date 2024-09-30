export type ProfileDetail = {
    id: number;
    name: string;
    profession: string;
    location: string;
    profileImage: string | URL | null;
    locationLink: string | undefined;
    email: string | null;
    phone: string | null;
    linkedIn: string | URL | null;
    github: string | URL | null;
    portfolio: string | URL | null;
    info: string;
    cvlink: string | URL;
    experience: {
        role: string;
        company: string;
        years: string;
    }[];
    education: {
        degree: string;
        institution: string;
        years: string;
    }[];
    certifications: string[];
    skills: string[];
    status: string;
    bio: string;
    featured: boolean | null;
    lastSeen: string | number | Date;
};


export type Profile = {
    id: number,
    cvlink: string | URL | undefined;
    featured: boolean;
    profileImage: string | URL | null;
    name: string;
    profession: string;
    skills: any[];
    location: string; 
    info: string; 
    status: string; 
    lastSeen?: string | number | Date | null;
};