import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name:string="Phan Ngoc Bao Chau"
  public email:string="chaupn@gmail.com"
  public nameid:string="nameid"
  public emailid:string="emailid"
  public isDisabled:boolean=true
  public hello:string="How is going?"
}
