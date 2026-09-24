import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './service-product-image-event.component/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail.component/service-product-image-event-detail.component';
import { CatalogComponent } from './catalog/catalog';
import { GroupCustomers } from './group-customers/group-customers';

const routes: Routes = [
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  { path: '', redirectTo: '/service-product-image-event', pathMatch: 'full' },
  { path: 'catalog', component: CatalogComponent },
  { path: 'group-customers', component: GroupCustomers },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
