import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router"; // para navegar entre CT
import { APP_BASE_HREF } from "@angular/common"; // para navegar entre CT

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';

import { ReactiveFormsModule } from "@angular/forms";
import { ComerciosComponent } from './components/comercios/comercios.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';
import { CarritoComponent } from './components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    ComerciosComponent,
    ModalDialogComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // Lo de RouterModule nos permite navegar entre CT
    RouterModule.forRoot([
        {path: '', redirectTo: "/inicio", pathMatch: "full"},
        {path: "inicio", component: InicioComponent},
        {path: "comercios", component: ComerciosComponent},
        {path: "carrito", component: CarritoComponent}
    ]),

  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: "/"} // Permite conservar, generar y reconocer los prefijos de URL
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
