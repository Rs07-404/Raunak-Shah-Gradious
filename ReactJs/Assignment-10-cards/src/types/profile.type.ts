export type ProfileDetail = {
    id: string,
    cvlink: string | URL | undefined;
    featured: boolean;
    profileImage: string | URL | null;
    name: string;
    profession: string;
    skills: any[];
    location: string; 
    info: string; 
    status: string; 
    lastSeen?: string | number | Date;
};

export type Profile = {
    id: string,
    cvlink: string | URL | undefined;
    featured: boolean;
    profileImage: string | URL | null;
    name: string;
    profession: string;
    skills: any[];
    location: string; 
    info: string; 
    status: string; 
    lastSeen?: string | number | Date;
};