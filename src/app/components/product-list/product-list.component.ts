import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { products as data } from 'src/app/data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  
  products: Product[] = data;
  term: string = '';
  details: boolean | undefined;

  showDetails(){
    this.details = !this.details
  }
}
