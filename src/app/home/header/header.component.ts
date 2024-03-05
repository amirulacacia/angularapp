import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, TabMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // items: MenuItem[];

  // activeItem: MenuItem;

  //   ngOnInit() {
  //       this.items = [
  //           {
  //             label: 'Home',
  //             icon: 'pi pi-fw pi-home',
  //             routerLink: "/",
  //             command: () => this.updateActiveItem("Home", this.items)
  //           },
  //           {
  //             label: 'Contact',
  //             icon: 'pi pi-fw pi-phone',
  //             routerLink: "/contact"
  //           },
  //           {
  //             label: 'User',
  //             icon: 'pi pi-fw pi-user',
  //             routerLink: "/users"
  //           },
  //       ];
  //   }

  //   updateActiveItem(page: string, items: MenuItem[]){
  //     switch (page) {
  //       case 'Home':
  //         this.activeItem = items[0];
  //         break;
  //       case 'Contact':
  //         this.activeItem = items[1];
  //         break;
  //       case 'User':
  //         this.activeItem = items[2];
  //         break;
  //       default:
  //         break;
  //     }
    // }
}
