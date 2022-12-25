import {bootstrapApplication} from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DetailsComponent } from './app/pages/details/details.component';
import { HomeComponent } from './app/pages/home/home.component';
import { provideHttpClient } from '@angular/common/http';
const BACKEND_URL:string=''
export const ROUTES: Route[] = [
  { path: '',
  redirectTo: 'home',
  pathMatch: 'full', },
  {path: 'home', component: HomeComponent},
  {path: 'details/:id', component: DetailsComponent},
  // ...
];

bootstrapApplication(AppComponent,
  {
    providers: [
      {provide: 'BACKEND_URL', useValue: 'https://rickandmortyapi.com/api/character'},
      provideRouter(ROUTES),
      provideHttpClient()
    ]
  });