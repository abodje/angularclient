import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product";
import { Router } from '@angular/router';
import { ProduitService } from "../produit.service";
@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css'],
  providers:[ProduitService]
})
export class ListeProduitComponent implements OnInit {
  pageProduct: any
  products: any[] = [];
  error: string = '';

  constructor(private productRepository: ProduitService, public router: Router) {
    this.rafraichir();
  }

  ngOnInit() {
    this.productRepository
      .getList()
      .subscribe(
        data => this.products = data,
        error => {
          console.log(error)
          this.error = error.message
        }
      );
  }


  rafraichir() {
    this.productRepository.getList()
      .subscribe(data => {
        this.pageProduct = data;
      }, error => {
        console.log(error);
      })
  }
  onEditProduit(id: number) {
    this.router.navigate(['editer-produit', id]);
   
  }



  onDeleteProduit(id: number) {

    this.productRepository.DeleteProduct(id)
      .subscribe(data => {

alert("voulez vous supprimer ce produit ??"+id);
        this.rafraichir();

        this.router.navigate(['product']);
      }, err => {
        alert("erreur");

        console.log(err);
      })

  }
}
