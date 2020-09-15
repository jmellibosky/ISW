import { Injectable } from '@angular/core';
import {of} from "rxjs"; // Me permite simular una llamada asincrona realizada a un servidor
import {ComercioAdherido} from "../models/comercio-adherido"; // Importo la CL creada ArticulosFamilias en la carpeta Models

@Injectable({
  providedIn: 'root'
})
export class MockComercioAdheridoService {

  constructor() { }

  // Metodo que devuelve el Array ComercioAdherido harcodeado en la CL de la carpeta Models
  get() {
    return of(ComercioAdherido);
  }
}
