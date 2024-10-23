export interface Contact {
    id: number;
    name: string,
    descripcion?: string,
    imagen?: string,
    precio: number,
    cantidad: number,

   
}

export interface defaultContact{

    name: "testep",
    descripcion?: "tesd",

    precio?: 1516,
    cantidad: 0,

}

export interface ContactJsonPlaceholder {
    id: number;
    name: string,
    descripcion?: string,
    imagen?: string,
    precio: number,
    cantidad: number,


}
