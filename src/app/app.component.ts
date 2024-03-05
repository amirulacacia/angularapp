import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from './testing/content/content.component';
import { HeaderComponent } from './testing/header/header.component';
import { AuthContentComponent } from './testing/auth-content/auth-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    ContentComponent,
    HeaderComponent,
    AuthContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularapp';
}
