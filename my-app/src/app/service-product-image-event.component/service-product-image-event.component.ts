import { Component } from '@angular/core';
import { ProductService } from '../product-service/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-product-image-event.component',
  standalone: false,
  styleUrl: './service-product-image-event.component.css',
  templateUrl: './service-product-image-event.component.html',
})
export class ServiceProductImageEventComponent {
  public products:any
  constructor(pservice: ProductService,private router:Router){
    this.products=pservice.getProductsWithImages()
  }
  viewDetail(f:any)
  {
    this.router.navigate(['service-product-image-event',f.ProductId])
  }
}
