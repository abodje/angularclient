import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
 

 
import { Routing } from './app.routing';
 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AjoutProduitComponent } from './produit/ajout-produit/ajout-produit.component';
import { ListeProduitComponent } from './produit/liste-produit/liste-produit.component';
import { MajProduitComponent } from './produit/maj-produit/maj-produit.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


@NgModule({
  declarations: [
    AppComponent,
    AjoutProduitComponent,
    ListeProduitComponent,
    MajProduitComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Routing,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
