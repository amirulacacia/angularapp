import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.scss'
})
export class ContactpageComponent {
  
}
