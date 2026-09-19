import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  styleUrl: './binding-event-component.css',
  templateUrl: './binding-event-component.html',
})
export class BindingEVentComponent {
  productName: string = '';

  onSave(): void {
    console.log('Product saved:', this.productName);
    alert('Product saved: ' + this.productName);
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.productName = inputElement.value;
  }
}
