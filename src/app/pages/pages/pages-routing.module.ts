import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  // { path: 'products', component: ProductsComponent },
  // { path: 'services', component: ServicesComponent },
  // { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
