export interface Contact {
    Nombre: string,
    NumbCelular?: string
   
}

export const defaultContact:Contact = {
    Nombre: "Nombre",
    NumbCelular: "+5412345678"
    
}


export interface ContactJsonPlaceholder {
    id?: number;
    Nombre?: string;
    Apellido?: string;
    userName?: string;
    NumbCelular?: string;

}
