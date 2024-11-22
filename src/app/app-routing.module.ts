import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoadorListaComponent} from './doador-lista/doador-lista.component';
import { DoadorDetalheComponent } from './doador/doador.component';
import { DoadorCadastroComponent } from './cadastro/cadastro.component';
import { RegistrarDoacaoComponent } from './registrar-doacao/registrar-doacao.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista-doador', component: DoadorListaComponent },
  { path: 'doador/:idDoador', component: DoadorDetalheComponent },
  { path: 'cadastro', component: DoadorCadastroComponent },
  { path: 'doacao/:id', component: RegistrarDoacaoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
