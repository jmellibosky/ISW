export class Productos {
    IdComercio: number;
    IdProducto: number;
    Nombre: string;
    Precio: number;
    NombreImagen: string;
}

export const ProductosComercio: Productos[] = [
    {IdComercio: 1, IdProducto: 1, Nombre: "Hamburguesa", Precio: 500, NombreImagen: "../../../assets/img/1_1.jpg"},
    {IdComercio: 1, IdProducto: 2, Nombre: "Café", Precio: 50, NombreImagen: "../../../assets/img/1_2.jpg"},
    {IdComercio: 1, IdProducto: 3, Nombre: "Papas", Precio: 245, NombreImagen: "../../../assets/img/1_3.jpg"},
    {IdComercio: 1, IdProducto: 4, Nombre: "Gaseosa", Precio: 150, NombreImagen: "../../../assets/img/1_4.jpg"},
]
