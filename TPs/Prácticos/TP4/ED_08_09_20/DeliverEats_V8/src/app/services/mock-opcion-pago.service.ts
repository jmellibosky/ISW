import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {OpcionPago} from "../models/opciones-pago";

@Injectable({
  providedIn: 'root'
})
export class MockOpcionPagoService {

  constructor() {}

  get() {
    return of(OpcionPago);
  }
}
