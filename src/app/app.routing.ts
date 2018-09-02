import { Routes, RouterModule } from '@angular/router';

 
import { AjoutProduitComponent } from "./produit/ajout-produit/ajout-produit.component";
import { MajProduitComponent } from './produit/maj-produit/maj-produit.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListeProduitComponent } from './produit/liste-produit/liste-produit.component';

const APP_ROUTES: Routes = [
    {
        path: 'liste-produit',
        component: ListeProduitComponent
    },
    {
        path: '',
        component: AcceuilComponent
    },
    {
        path: 'editer-produit/:id', component: MajProduitComponent
    },
    {
        path: 'ajout-produit', component: AjoutProduitComponent
    },
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);