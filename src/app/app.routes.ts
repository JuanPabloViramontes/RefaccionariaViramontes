import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { HomeComponent } from './pages/pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: 'inicio', component: HomeComponent }, 
  { path: 'services', component: ServicesComponent }, 
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: 'inicio' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
