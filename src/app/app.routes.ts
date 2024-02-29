import { Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ContactpageComponent } from './home/contactpage/contactpage.component';
import { UsersComponent } from './admin/users/users.component';

export const routes: Routes = [
    {
        path : "",
        component: HomepageComponent
    },
    {
        path : "contact",
        component: ContactpageComponent
    },
    {
        path : "users",
        component: UsersComponent
    },

];
