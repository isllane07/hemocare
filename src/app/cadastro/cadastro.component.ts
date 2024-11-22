import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-doador-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class DoadorCadastroComponent {
  doador = { nome: '', idade: '', peso: '', tipoSanguineo: '', sexo: '', telefone: '' };

  onSubmit() {
    console.log('Doador Cadastrado', this.doador);
  }
}
