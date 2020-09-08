import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {OpcionesEntrega} from "../models/opcion-entrega";

@Injectable({
  providedIn: 'root'
})
export class MockOpEntregaService {

  constructor() { }

  get() {
    return of(OpcionesEntrega);
  }
}
