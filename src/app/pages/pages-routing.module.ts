import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
    { path: '', component: HomeComponent }, // Página de inicio
    { path: 'services', component: ServicesComponent }, // Servicios
    { path: '**', redirectTo: '' }, // Redirección para rutas no válidas
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
