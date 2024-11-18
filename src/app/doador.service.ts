import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';




export interface Doador {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  tipoSanguineo: string;
  telefone: string;
  dataDoacao: Date;
  fumante: string;
  peso: string;
 
 
}


@Injectable({
  providedIn: 'root'
})
export class DoadorService {
  private doadores: Doador[] = [];
  private doadoresSubject = new BehaviorSubject<Doador[]>(this.doadores);


  constructor() {


    this.doadores = [
      { id: 1, nome: 'Bernardo França', idade: 20, sexo: "Masculino", tipoSanguineo: 'O+', telefone: "(81) 98585-4569", dataDoacao: new Date('2024-07-07'), fumante: "Não", peso: "52 KG" },
      { id: 2, nome: 'Helena Vitória', idade: 22, sexo: "Feminino", tipoSanguineo: 'B+', telefone: "(85) 98563-4789", dataDoacao: new Date('2024-12-01'), fumante: "Não", peso: "68 KG" },
    ];
    this.doadoresSubject.next(this.doadores);
  }


 
  getDoadores() {
    return this.doadoresSubject.asObservable();
  }




  addDoador(doador: Doador) {
    doador.id = this.doadores.length + 1;
    this.doadores.push(doador);
    this.doadoresSubject.next(this.doadores);
  }


 
  updateDoador(updatedDoador: Doador) {
    const index = this.doadores.findIndex(d => d.id === updatedDoador.id);
    if (index !== -1) {
      this.doadores[index] = updatedDoador;
      this.doadoresSubject.next(this.doadores);
    }
  }


 
  deleteDoador(id: number) {
    this.doadores = this.doadores.filter(d => d.id !== id);
    this.doadoresSubject.next(this.doadores);
  }
}
