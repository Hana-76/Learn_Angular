import { Component } from '@angular/core';

@Component({
  selector: 'app-product-service',
  standalone: false,
  styleUrl: './product-service.css',
  templateUrl: './product-service.html',
})
export class ProductService {
  productsImage = [
    { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "my-app/src/app/assets/h1.png" },
    { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "my-app/src/app/assets/h2.png" },
    { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "my-app/src/app/assets/h3.png" },
  ]

  constructor() { }

  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: any) {
    return this.productsImage.find(x => x.ProductId == id);
  }
}
