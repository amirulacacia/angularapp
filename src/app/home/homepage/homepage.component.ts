import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RippleModule } from 'primeng/ripple';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, RippleModule, ButtonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent {
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
