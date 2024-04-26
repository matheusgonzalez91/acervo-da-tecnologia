import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { NossoAcervoComponent } from './components/nosso-acervo/nosso-acervo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'sobre',
    component: SobreComponent,
  },

  {
    path: 'nosso-acervo',
    component: NossoAcervoComponent,
  },

  {
    path: 'recursos',
    component: RecursosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
