import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doador-detalhe',
  templateUrl: './doador.component.html',
  styleUrls: ['./doador.component.css']
})
export class DoadorDetalheComponent implements OnInit {
  doador: any = {};
  id: string = ''; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.carregarDoadorDetalhes();
  }

  carregarDoadorDetalhes() {

    if (this.id === 'João Silva') {
      this.doador = { nome: 'João Silva', idade: 25, tipoSanguineo: 'O+', sexo: 'Masculino', telefone: '99999-9999', dataCadastro: '2023-05-12' };
    } else if (this.id === 'Maria Souza') {
      this.doador = { nome: 'Maria Souza', idade: 30, tipoSanguineo: 'A-', sexo: 'Feminino', telefone: '98888-8888', dataCadastro: '2023-06-15' };
    }
  }
}
