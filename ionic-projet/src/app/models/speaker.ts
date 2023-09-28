interface Badge {
    name?:string;
    description?:string;
}

interface Social {
    icon?:string;
    name?:string;
    link?:string;
}

export class Speaker {
    id?:number;
    name?:string;
    featured?:boolean;
    company?:string;
    companyLogo?:string;
    country?:string;
    photoUrl?:string;
    shortBio?:string;
    bio?:string;
    tags?:string[];
    badges?:Badge[];
    socials?:Social[];
}