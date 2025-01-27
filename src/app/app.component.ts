import { Component } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';
import { ContactModule } from './contact/contact.module';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [SharedModule, PagesModule, ServicesModule, ContactModule, RouterModule]
})
export class AppComponent {
  title = 'RefaccionariaViramontes';
}
