import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ServiceDetailsComponent,
    ServicesPageComponent,
    ServiceCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ServiceDetailsComponent,
    ServicesPageComponent,
    ServiceCardComponent
  ]
})
export class ServicesModule { }
