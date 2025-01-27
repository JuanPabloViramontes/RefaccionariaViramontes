import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
  products = [
    { name: 'Acumuador XTREME', price: 250, image: 'assets/acumulador-XTREME.jpg' },
    { name: 'Anticongelante verde', price: 800, image: 'assets/thor-verde.jpg' },
    { name: 'LTH kit', price: 1200, image: 'assets/kit-LTH.jpg' },
    { name: 'Anticongelante rosa', price: 450, image: 'assets/thor-rosa.jpg' },
    { name: 'Acumuador XTREME', price: 250, image: 'assets/acumulador-XTREME.jpg' },
    { name: 'Anticongelante verde', price: 800, image: 'assets/thor-verde.jpg' },
    { name: 'LTH kit', price: 1200, image: 'assets/kit-LTH.jpg' },
    { name: 'Anticongelante rosa', price: 450, image: 'assets/thor-rosa.jpg' },
    { name: 'LTH kit', price: 1200, image: 'assets/kit-LTH.jpg' },
    { name: 'Anticongelante rosa', price: 450, image: 'assets/thor-rosa.jpg' }
  ];
}

