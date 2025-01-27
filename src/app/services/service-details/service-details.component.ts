import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent {
  @Input() service: any;

  goBack() {
    console.log('Volver a la página de servicios');
    // Implementar navegación hacia atrás
  }
}
