import { Component } from '@angular/core';

@Component({
  selector: 'app-product-service',
  standalone: false,
  styleUrl: './product-service.css',
  templateUrl: './product-service.html',
})
export class ProductService {
  // Dữ liệu cho bảng Danh mục hiển thị ở product-service.html
  categories = [
    {
      id: 'cate1',
      name: 'nuoc ngot',
      products: [
        { id: 'p1', name: 'Coca', price: 100, imageUrl: 'assets/h1.png' },
        { id: 'p2', name: 'Pepsi', price: 300, imageUrl: 'assets/h2.png' },
        { id: 'p3', name: 'Sting', price: 200, imageUrl: 'assets/h3.png' }
      ]
    },
    {
      id: 'cate2',
      name: 'Bia',
      products: [
        { id: 'p4', name: 'Heleiken', price: 500, imageUrl: 'assets/h4.png' },
        { id: 'p5', name: '333', price: 400, imageUrl: 'assets/h5.png' },
        { id: 'p6', name: 'Sai Gon', price: 600, imageUrl: 'assets/h6.png' }
      ]
    }
  ];

  // Dữ liệu phục vụ cho ServiceProductImageEventComponent
  productsImage = [
    { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'assets/h1.png' },
    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'assets/h2.png' },
    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'assets/h3.png' },
    { ProductId: 'p4', ProductName: 'Heleiken', Price: 500, Image: 'assets/h4.png' },
    { ProductId: 'p5', ProductName: '333', Price: 400, Image: 'assets/h5.png' },
    { ProductId: 'p6', ProductName: 'Sai Gon', Price: 600, Image: 'assets/h6.png' }
  ];

  constructor() {}

  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: any) {
    return this.productsImage.find(x => x.ProductId == id);
  }
}