import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-doador-lista',
  templateUrl: './doador-lista.component.html',
  styleUrls: ['./doador-lista.component.css']
})
export class DoadorListaComponent implements OnInit {

  doadores = [
    { id: 1, nome: 'João Silva', tipoSanguineo: 'O+', telefone: '99999-9999', dataDoacao: '2024-11-20' },
    { id: 2, nome: 'Maria Souza', tipoSanguineo: 'A-', telefone: '98888-8888', dataDoacao: '2024-11-19' },
    { id: 3, nome: 'Carlos Oliveira', tipoSanguineo: 'B+', telefone: '97777-7777', dataDoacao: '2024-11-18' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

 
  verDetalhes(doadorId: number): void {
    this.router.navigate(['/detalhe', doadorId]);
  }
}
