import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-doacao',
  templateUrl: './registrar-doacao.component.html',
  styleUrls: ['./registrar-doacao.component.css']
})
export class RegistrarDoacaoComponent implements OnInit {
  idDoador: string | null = null;
  doacao = { alimentadoUltimas2Horas: '' , saiuDoPaisUltimos3Meses: '', dataHora: '' };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idDoador = this.route.snapshot.paramMap.get('idDoador');
  }

  onSubmit() {

    this.doacao.dataHora = new Date().toLocaleString();
    console.log('Doação Registrada:', this.doacao);

    
    this.router.navigate(['/doadores']);
  }
}
