import { Component, OnInit } from '@angular/core';

import { Product } from "../models/product";
import { ProduitService } from "../produit.service";
@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css'],
  providers: [ProduitService]
})
export class AjoutProduitComponent implements OnInit {
  product: Product = new Product();
  mode: number = 1;
  constructor(public produitservice: ProduitService) { }

  ngOnInit() {
  }
  saveProduct() {
    console.log(this.product);
    this.produitservice.saveProduct(this.product)
      .subscribe(data => {
        this.product = data;
        this.mode = 2;
      },
        err => {
          console.log(err);
        })

  }
}
