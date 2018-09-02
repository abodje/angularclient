import { Component, OnInit } from '@angular/core';
 
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from "../models/product";
import { ProduitService } from "../produit.service";
@Component({
  selector: 'app-maj-produit',
  templateUrl: './maj-produit.component.html',
  styleUrls: ['./maj-produit.component.css'],
  providers: [ProduitService]
})
export class MajProduitComponent implements OnInit {
  mode: number = 1;
  product: Product = new Product();
  idProduct: number;
  constructor(public activatedRoute: ActivatedRoute,
    public produitservice: ProduitService, public router: Router) {
    this.product.id = activatedRoute.snapshot.params["id"];
  }

  ngOnInit() {
    this.produitservice.getProduct(this.product.id)
      .subscribe(data => {
        this.product = data;
      }, err => {
        console.log(err);
      })
  }
  updateProduct() {

    this.produitservice.updateProduct(this.product)
      .subscribe(data => {
        this.product = data;
        console.log(data);
        //swal("test");
        alert("Mise a jour effectuée");
        this.router.navigate(['products']);
      }, err => {
        alert("Erreur d'enregistrement");

        console.log(err);
      })

  }

}



