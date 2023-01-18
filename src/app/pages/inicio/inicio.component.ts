import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  public iniciarAdmissao: boolean = false;

  ngOnInit(): void {
  }

  iniciarCadastro(event: boolean):void {
    this.iniciarAdmissao = event;
  }

}
