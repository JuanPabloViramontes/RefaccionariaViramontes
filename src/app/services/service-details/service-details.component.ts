import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
})
export class ServiceDetailsComponent {
  @Input() service: any;
  @Output() back = new EventEmitter<void>();

  goBack() {
    this.back.emit();
  }
}
