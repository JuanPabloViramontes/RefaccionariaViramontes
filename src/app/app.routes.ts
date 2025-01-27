import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { HomeComponent } from './pages/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz (Inicio)
  { path: 'services', component: ServicesComponent }, // Ruta para Servicios
  { path: '**', redirectTo: '' }, // Redirección para rutas no existentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

