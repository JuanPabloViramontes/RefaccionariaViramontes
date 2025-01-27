import { Component } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent {
  services = [
    { id: 1, name: 'Mantenimiento Preventivo', description: 'Revisión completa del vehículo.', icon: '🛠️' },
    { id: 2, name: 'Cambio de Aceite', description: 'Servicio rápido y eficiente.', icon: '🛢️' },
    { id: 3, name: 'Alineación y Balanceo', description: 'Optimización de ruedas y estabilidad.', icon: '🚗' },
  ];

  viewDetails(service: any) {
    console.log('Ver detalles:', service);
    // Navegar a la página de detalles
  }
}
