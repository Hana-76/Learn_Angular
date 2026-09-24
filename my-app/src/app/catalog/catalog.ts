import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog-service';
@Component({
  selector: 'app-catalog',
  standalone: false,
  styleUrl: './catalog.css',
  templateUrl: './catalog.html',
})
export class CatalogComponent implements OnInit {
  categories: any;

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    // Lấy danh sách danh mục và sản phẩm từ Service
    this.categories = this.catalogService.getCategories();
  }
}