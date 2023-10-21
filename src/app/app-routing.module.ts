import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { ServicesComponent } from './Components/services/services.component';

const routes: Routes = [
  {
    path: 'Contact', component: ContactComponent
  },
  {
    path: 'About', component: AboutComponent
  },
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'Services', component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
