import { Component, OnInit } from '@angular/core';
import { ComerciosAdheridos} from "src/app/models/comercio-adherido";
import { Productos} from "src/app/models/productos";
import { OpcionesPago} from "src/app/models/opciones-pago";
import { MockOpcionPagoService } from "src/app/services/mock-opcion-pago.service";
import { MockComercioAdheridoService } from "src/app/services/mock-comercio-adherido.service"; // Importo los metodos definidos en el MockArticulosFamilias
import { MockProductosService } from "src/app/services/mock-productos.service";
import { MockCiudadesService } from "src/app/services/mock-ciudades.service";
import { MockOpEntregaService } from "src/app/services/mock-op-entrega.service";

import { Pipe, PipeTransform } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Ciudades } from 'src/app/models/ciudades';
import { OpcionEntrega } from 'src/app/models/opcion-entrega';

@Component({
  selector: 'app-comercios',
  templateUrl: './comercios.component.html',
  styleUrls: ['./comercios.component.css']
})

export class ComerciosComponent implements OnInit {
  titulo: string = "Comercios Adheridos";
  comercioSeleccionado: string = "";
  // Arreglos
  Items: ComerciosAdheridos[] = [];
  ItemsProductos: Productos[] = [];
  OpcionesPago: OpcionesPago[] = [];
  CiudadesCordoba: Ciudades[];
  OpcionesEntregas: OpcionEntrega[];
  // Variables utilizadas para tomar los valores de los ComboBox (Select del HTML)
  seleccionPago: string = "";
  pagoSeleccionado: string = "0";
  opcionTarjeta: string = "0";
  opcionRecibirlo: string = "0";
  opcionCiudad: string = "0";
  NombreProducto: string = "";
  ImagenProducto: string = "";
  PrecioProducto: number = 0.00;
  MontoAbonado: string = "";

  // Estados que me permiten navegar entre ventanas
  TituloAccionABMC = {
    P: "Lista de Productos Disponibles",
    C: "Formulario de Confirmación Pedido",
    L: "Lista De Comercios Adheridos"
  };

  AccionABMC = "L"; // inicialmente inicia en el listado de comercios
  Mensajes = {
    SD: " No se encontraron registros...",
    RD: " Revisar los datos ingresados..."
  };

  OpHoraEntrega = [
    {Hora: 1},{Hora: 2},{Hora: 3},{Hora: 4},
    {Hora: 5},{Hora: 6},{Hora: 7},{Hora: 8},
    {Hora: 9},{Hora: 10},{Hora: 11},{Hora: 12},
    {Hora: 13},{Hora: 14},{Hora: 15},{Hora: 16},
    {Hora: 17},{Hora: 18},{Hora: 19},{Hora: 20},
    {Hora: 21}, {Hora: 22}, {Hora: 23}, {Hora: 24}
  ]

  constructor(
    private comerciosAdheridosService: MockComercioAdheridoService,
    private productosComercios: MockProductosService,
    private opcionPago: MockOpcionPagoService,
    private ciudades: MockCiudadesService,
    private opcionesEntrega: MockOpEntregaService,
    public formBuilder: FormBuilder
  ) {}

  FormReg: FormGroup;
  submitted = false;

  ngOnInit(): void {
    // Validacion ComboBox e Inputs
    this.FormReg = this.formBuilder.group({
      Calle: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(55)]],
      NumCalle: ["", [Validators.required, Validators.pattern("^[0-9]+")]],
      Ciudad: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(55)]],
      ReferenciaOp: [null],
      Recibirlo: ["", [Validators.required]],
      Pago: ["", [Validators.required, Validators.pattern("[0-9]{1,7}")]],
      Vuelto: ["", [Validators.required, Validators.pattern("^[0-9]+")]],
      Recepcion: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)[0-9]{2}"
          )
        ]],
      FechaVencimiento: [
          "",
          [
            Validators.required,
            Validators.pattern(
              "(0[1-9]|1[012])[-/](19|20)[0-9]{2}"
            )
          ]],
      OpPago: ["", [Validators.required,  Validators.minLength(4), Validators.maxLength(55)]],
      NumTarjeta: ["",
      [Validators.required, Validators.pattern("[0-9]{13}")]],
      NombreTitular: [
        "",
        [Validators.required, Validators.pattern("^[A-Za-z _]*[A-Za-z][A-Za-z _]*$")]],
      ApellidoTitular: [
        "",
        [Validators.required, Validators.pattern("^[A-Za-z _]*[A-Za-z][A-Za-z _]*$")]],
      Cvc: ["", [Validators.required, Validators.pattern("^[0-9]{3}$")]],
      HoraEntrega:["", [Validators.required, Validators.pattern("[0-2]?[0-9]?")]],
      MinutosEntrega: ["", [Validators.required, Validators.pattern("[0-5]?[0-9]")]]
    });

    this.GetComerciosAdheridos();
    this.GetProductosComercios();
    this.GetOpcionesPago();
    this.GetCiudades();
    this.GetOpcionesEntrega();
  }

  GetComerciosAdheridos(){
    this.comerciosAdheridosService.get().subscribe((res:ComerciosAdheridos[]) => {this.Items = res; });
  }

  GetProductosComercios(){
    this.productosComercios.get().subscribe((res:Productos[]) => {this.ItemsProductos = res; });
  }

  GetOpcionesPago(){
    this.opcionPago.get().subscribe((res:OpcionesPago[]) => {this.OpcionesPago = res; });
  }

  GetCiudades(){
    this.ciudades.get().subscribe((res:Ciudades[]) => {this.CiudadesCordoba = res; });
  }

  GetOpcionesEntrega(){
    this.opcionesEntrega.get().subscribe((res:OpcionEntrega[]) => {this.OpcionesEntregas = res; });
  }

  AnotarComercio(item){
    this.AccionABMC = "P";
    window.scroll(0, 0); // ir al incio del scroll

    this.comercioSeleccionado = item.IdComercioAdherido;
  }

  Volver(){
    var opcion = confirm("Se cancela el Pedido");
    if (opcion){
      this.AccionABMC = "L";
      window.scroll(0, 0); // ir al incio del scroll
      this.FormReg.reset(this.FormReg.value);
      this.submitted = false;
      this.FormReg.markAsUntouched();
    }
    else{
      null;
    }
  }

  Agregar(product){
    this.AccionABMC = "C";
    window.scroll(0, 0);
    this.NombreProducto = product.Nombre;
    this.PrecioProducto = product.Precio;
    this.ImagenProducto = product.NombreImagen;

    this.FormReg.reset();
    this.submitted = false;
    //this.FormReg.markAsPristine();
    this.FormReg.markAsUntouched();
  }

  Grabar(){
    alert("Ejecutar metodo grabar");
  }

  CalcularVuelto(){
    if (this.MontoAbonado  != ""){
      var vuelto = Number(this.MontoAbonado) - this.PrecioProducto;
      this.FormReg.controls['Vuelto'].setValue(vuelto.toString());
    }
    else{
      return "0";
    }
  }

  // Confirma la compra
  Confirmar() {
    this.submitted = true;
    // verificar que los validadores esten OK
     if (this.seleccionPago == "1") {
    // Si es en EFECTIVO entonces otorgo valores a los campos de TARJETA para que el formulario
    // no de INVALIDO
      this.FormReg.controls['NumTarjeta'].setValue("1111111111111");
      this.FormReg.controls["NombreTitular"].setValue("abcd");
      this.FormReg.controls["ApellidoTitular"].setValue("abcd");
      this.FormReg.controls["FechaVencimiento"].setValue("10/2020");
      this.FormReg.controls["Cvc"].setValue(123);
      this.FormReg.controls["HoraEntrega"].setValue(1);


      var confirmacion = confirm("¿Confirmar Pedido?")
      if(this.FormReg.invalid && confirmacion)
      {
        return;}
      else{
        this.FormReg.reset();
        this.FormReg.markAsUntouched();
        this.submitted = false;
        this.AccionABMC = "L"
        // Al tener la confirmación del CLIENTE y la Validez del FORM, seteo los valores que agregue artificialmente
        this.FormReg.controls['NumTarjeta'].setValue("");
        this.FormReg.controls["NombreTitular"].setValue("");
        this.FormReg.controls["ApellidoTitular"].setValue("");
        this.FormReg.controls["FechaVencimiento"].setValue("");
        this.FormReg.controls["Cvc"].setValue(0);
        this.FormReg.controls["HoraEntrega"].setValue(0);
        window.scroll(0, 0); // ir al incio del scroll
        alert("Pedido en Camino !!!");
      }
    }
    else{
      this.FormReg.controls['Pago'].setValue(1000);
      this.FormReg.controls['Vuelto'].setValue(100);
      this.FormReg.controls["HoraEntrega"].setValue(0);

      var confirmacion = confirm("¿Confirmar Pedido?")
      if(this.FormReg.invalid && confirmacion)
      {
        return;}
      else{
        this.FormReg.reset();
        this.FormReg.markAsUntouched();
        this.submitted = false;
        this.AccionABMC = "L"
        this.FormReg.controls['Pago'].setValue(3);
        this.FormReg.controls['Vuelto'].setValue(0);
        window.scroll(0, 0); // ir al incio del scroll
        alert("Pedido en Camino !!!");
      }
    }

  }

  CapturarPago(){
    this.seleccionPago = this.pagoSeleccionado
  }

  CapturarOpTarjeta(){
    null;
  }

  CapturarOpRecibirlo(){

    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    this.FormReg.controls['Recepcion'].setValue(`0${day}/0${month}/${year}`);
    this.FormReg.controls['HoraEntrega'].setValue("");
    this.FormReg.controls['MinutosEntrega'].setValue("00");
    
  }

  CapturarCiudad() {
    null;
  }
}
