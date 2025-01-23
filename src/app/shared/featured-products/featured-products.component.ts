import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {
  featuredProducts = [
    { name: 'Filtro de aceite', price: 250, image: 'assets/filtro-aceite.jpg' },
    { name: 'Pastillas de freno', price: 800, image: 'assets/pastillas-freno.jpg' },
    { name: 'Batería 12V', price: 1200, image: 'assets/bateria.jpg' }
  ];
}

