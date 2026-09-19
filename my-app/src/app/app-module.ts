import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEVentComponent } from './binding-event-component/binding-event-component';
import { ProductService } from './product-service/product-service';
import { ServiceProductImageEventComponent } from './service-product-image-event.component/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail.component/service-product-image-event-detail.component';

@NgModule({
  declarations: [
    App,
    BindingPropertyComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEVentComponent,
    ProductService,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
