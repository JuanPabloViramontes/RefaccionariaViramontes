import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServicesPageComponent } from './services-page/services-page.component';

@NgModule({
  declarations: [
    ServiceDetailsComponent,
    ServicesPageComponent,
    ServiceCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ServiceDetailsComponent,
    ServicesPageComponent,
    ServiceCardComponent  ]
})
export class ServicesModule { }
