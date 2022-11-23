export interface Contact {
    Name: string,
    CelularNumber?: string,
    TelephoneNumber?: string,
    Description?: string,

   
}

export const defaultContact:Contact = {
    Name: "Name",
    CelularNumber: "+5412345678"
    
}


export interface ContactJsonPlaceholder {
    id?:number,
    Name?: string,
    CelularNumber?: string,
    TelephoneNumber?: string,
    Description?: string,


}
