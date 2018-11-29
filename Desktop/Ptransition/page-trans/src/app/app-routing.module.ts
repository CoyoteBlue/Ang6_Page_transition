import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

const APP_ROUTES: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full'}
  /*  { path: 'root', component: AppComponent },*/
 /* { path: 'menu', component: MenuComponent } */
/*{ path: '', redirectTo: 'root', pathMatch: 'full' },
    { path: 'root', component: AppComponent },
     { path: 'menu', component: MenuComponent },*/
  /*  { path: 'customer', component: CustomerComponent },
    { path: 'portfolio', component: PortfolioComponent, children: FolioRoutes },
    { path: '', component: HomeComponent }	*/
  ];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(APP_ROUTES), CommonModule],
  exports: [RouterModule]
/*  import { AppComponent } from './app.component';*/
})
export class AppRoutingModule { }
/*export const routingComponents = { MainComponent }*/
