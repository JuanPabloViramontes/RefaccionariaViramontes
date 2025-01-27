import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
})
export class ServiceCardComponent {
  @Input() service: any;  
  
  constructor(private router: Router) {}


  navigateToServices() {
    this.router.navigate(['/servicios']);
  }

  navigateToLearnMore() {
    this.router.navigate(['/acerca-de']);
  }
}
