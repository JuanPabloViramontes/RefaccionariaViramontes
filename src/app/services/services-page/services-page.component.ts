import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css'],
})
export class ServicesPageComponent {
  
  services = [
    { id: 1, name: 'Mantenimiento Preventivo', description: 'Revisión completa del vehículo.', icon: '🛠️', color: '#1abc9c' },
    { id: 2, name: 'Cambio de Aceite', description: 'Servicio rápido y eficiente.', icon: '🛢️', color: '#e74c3c' },
    { id: 3, name: 'Alineación y Balanceo', description: 'Optimización de ruedas y estabilidad.', icon: '🚗', color: '#3498db' },
  ];

  viewDetails(service: any) {
    console.log('Ver detalles:', service);
    // Navegar o mostrar detalles del servicio seleccionado
  }
}
