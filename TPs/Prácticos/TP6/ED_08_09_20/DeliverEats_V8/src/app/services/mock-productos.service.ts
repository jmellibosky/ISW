import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {ProductosComercio} from "../models/productos";

@Injectable({
  providedIn: 'root'
})
export class MockProductosService {

  constructor() {}

  get() {
    return of(ProductosComercio);
  }
}
