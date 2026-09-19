import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-style-component',
  standalone: false,
  styleUrls: ['./binding-style-component.css'],
  templateUrl: './binding-style-component.html',
})
export class BindingStyleComponent {
  progressValue: number = 75;
  statusColor: string = 'red';

  isCritical(): boolean {
    return this.progressValue < 50;
  }
}