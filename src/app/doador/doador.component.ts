import { Component, OnInit } from '@angular/core';
import { Doador, DoadorService } from '../doador.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-doador',
  templateUrl: './doador.component.html',
  styleUrls: ['./doador.component.css']
})
export class DoadorComponent implements OnInit {
  doadores: Doador[] = [];
  form: FormGroup;
  editarDoador: Doador | null = null;


  constructor(
    private doadorService: DoadorService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(18)]],
      sexo: ['', Validators.required],
      tipoSanguineo: ['', Validators.required],
      telefone: ['', Validators.required],
      dataDoacao: ['', Validators.required],
      fumante: ['', Validators.required],
      peso: ['', Validators.required]
     
     
    });
  }


  ngOnInit(): void {
    this.doadorService.getDoadores().subscribe((doadores) => {
      this.doadores = doadores;
    });
  }




  onSubmit(): void {
    if (this.form.valid) {
      const doador: Doador = this.form.value;
      if (this.editarDoador) {
        doador.id = this.editarDoador.id;
        this.doadorService.updateDoador(doador);
      } else {
        this.doadorService.addDoador(doador);
      }
      this.form.reset();
      this.editarDoador = null;
    }
  }


 
  editar(doador: Doador): void {
    this.editarDoador = doador;
    this.form.setValue({
      nome: doador.nome,
      idade: doador.idade,
      sexo: doador.sexo,
      tipoSanguineo: doador.tipoSanguineo,
      telefone: doador.telefone,
      dataDoacao: doador.dataDoacao,
      fumante: doador.fumante,
      peso: doador.peso
 
    });
  }


 
  remover(id: number): void {
    this.doadorService.deleteDoador(id);
  }
}


