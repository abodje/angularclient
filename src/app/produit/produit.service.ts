import { Injectable } from '@angular/core';
import { Response,Http } from '@angular/http';
 
import { Observable } from 'rxjs';
import { Product } from '././models/product';

import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class ProduitService {

  constructor(private http: Http
) { }

  getList() {
    let url = 'http://127.0.0.1:8000/api/products';

    return this.http
      .get(url)
      .map((data: Response) => data.json());
  }

  getProduct(id: number) {
    return this.http.get("http://127.0.0.1:8000/api/products/" + id)
      .map(resp => resp.json())

  }



  saveProduct(product: Product) {
    let url = 'http://127.0.0.1:8000/api/products'

    return this.http
      .post(url, product)
      .map((data: Response) => data.json());
  }




  updateProduct(product: Product) {
    let url = 'http://127.0.0.1:8000/api/products/' + product.id
    return this.http
      .put(url, product)
      .map((data: Response) => data.json());

  }

  DeleteProduct(id: number) {
    return this.http.delete("http://127.0.0.1:8000/api/products/" + id)


  }
}
