import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { UbiComponent } from './ubi/ubi.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeaturedProductsComponent,
    UbiComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeaturedProductsComponent,
    UbiComponent,
  ]
})
export class SharedModule {}
