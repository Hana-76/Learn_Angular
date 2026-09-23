import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './service-product-image-event.component/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail.component/service-product-image-event-detail.component';
// import { ProductCatalogComponent } from './product-catalog/product-catalog';

const routes: Routes = [
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  { path: '', redirectTo: '/service-product-image-event', pathMatch: 'full' },
  // { path: 'catalog', component: ProductCatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
