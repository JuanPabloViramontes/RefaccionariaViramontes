import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ServicesModule } from '../services/services.module';
import { ServicesComponent } from './services/services.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    ServicesModule,
    PagesRoutingModule
  ],
  exports: [ 
    CommonModule,
    SharedModule,
    ServicesModule,
    HomeComponent,
    ServicesComponent
  ]
})
export class PagesModule {}
