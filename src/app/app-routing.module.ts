import { DadosCadastraisComponent } from './components/formulario/dados-cadastrais/dados-cadastrais.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      component: InicioComponent,
      path:""
    },
    {
      component:DadosCadastraisComponent,
      path:"dados-cadastrais"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
