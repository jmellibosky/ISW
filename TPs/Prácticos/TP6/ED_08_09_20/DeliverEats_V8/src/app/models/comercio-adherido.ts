export class ComerciosAdheridos {
    IdComercioAdherido: number;
    Nombre: string;
    Calle: string;
    Numero: number;
    Logo: string;
}

export const ComercioAdherido: ComerciosAdheridos[] = [
    { IdComercioAdherido: 1, Nombre: "Mostachys", Calle: "Blvd. Chacabuco", Numero: 466, Logo: "../../../assets/img/1.jpg"},
    { IdComercioAdherido: 2, Nombre: "McDonald's", Calle: "Av. Vélez Sarsfield", Numero: 361, Logo: "../../../assets/img/2.jpg" },
    { IdComercioAdherido: 3, Nombre: "Burger King", Calle: "Bernardino Rivadavia", Numero: 55, Logo: "../../../assets/img/3.jpg" },
    { IdComercioAdherido: 4, Nombre: "Black Pan", Calle: "Av. Hipólito Yrigoyen", Numero: 419, Logo: "../../../assets/img/4.jpg" }
]