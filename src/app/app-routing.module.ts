import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ErrorComponent } from './error/error.component';

import { IMAGES } from './portfolio/image.model';

const defaultImage: string = IMAGES[0].title;
const name: string = 'Salome Brack';

const routes: Routes = [
  { path: '', component: HomeComponent, title: name, data: { animation: 'home' } },
  { path: 'portfolio', redirectTo: `/portfolio/${defaultImage}`, pathMatch: 'full' },
  { path: 'portfolio/:title', component: PortfolioComponent, data: { animation: 'portfolio' } },
  { path: 'about', component: AboutComponent, title: `About Me | ${name}`, data: { animation: 'about' } },
  { path: 'contact', component: ContactComponent, title: `Contact | ${name}`, data: { animation: 'contact' } },
  { path: 'imprint', component: ImprintComponent, title: `Imprint | ${name}`, data: { animation: 'imprint' } },
  { path: '404', component: ErrorComponent, title: 'Page not found' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
