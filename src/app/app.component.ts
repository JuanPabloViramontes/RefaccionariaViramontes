import { Component } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [SharedModule, PagesModule, RouterModule]
})
export class AppComponent {
  title = 'RefaccionariaViramontes';
}
