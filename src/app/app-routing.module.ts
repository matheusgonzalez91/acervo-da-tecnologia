import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { NossoAcervoComponent } from './components/nosso-acervo/nosso-acervo.component';
import { JavaComponent } from './pages/java/java.component';
import { PythonfordevsComponent } from './pages/pythonfordevs/pythonfordevs.component';

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
  },

  {
    path: 'livro/28211f07-9524-4f14-8b4f-476f6d04ac24', component: JavaComponent
  },

  {
    path: 'livro/1e3e9924-ff1e-468a-9259-6dc1b2162bc5', component: PythonfordevsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
