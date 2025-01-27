import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ServicesModule } from '../services/services.module';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    ServicesModule,
    ContactModule
  ],
  exports: [ 
    CommonModule,
    SharedModule,
    ServicesModule,
    HomeComponent,
    ServicesComponent,
    ContactComponent
  ]
})
export class PagesModule {}
