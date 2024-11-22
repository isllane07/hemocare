import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Doador {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  tipoSanguineo: string;
  telefone: string;
}


@Injectable({
  providedIn: 'root'
})
export class DoadorService {
  private doadores: Doador[] = [];
  private doadoresSubject = new BehaviorSubject<Doador[]>(this.doadores);


  constructor() {


    this.doadores = [
      
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
