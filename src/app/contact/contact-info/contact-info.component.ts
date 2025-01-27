import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoComponent {
  contactDetails = {
    address: 'Calle Ficticia 123, Ciudad Ejemplo',
    phone: '+1 234 567 890',
    email: 'contacto@empresa.com',
    socialMedia: [
      { platform: 'Facebook', link: 'https://www.facebook.com/empresa' },
      { platform: 'Twitter', link: 'https://twitter.com/empresa' },
      { platform: 'Instagram', link: 'https://www.instagram.com/empresa' },
    ],
  };
}
