import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.scss']
})
export class ConsultaCpfComponent implements OnInit {

  @Output()
  public formValidado: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public msgErro: any;

  ngOnInit(): void {
  }

   isValidCPF(cpf:string): boolean {
    if (typeof cpf !== "string") {
      this.formValidado.emit(false);
      return this.msgErro = true;
    }
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (cpf.length !== 11 || !Array.from(cpf).filter(e => e !== cpf[0]).length) {
      this.formValidado.emit(false);
      return this.msgErro = true;
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) {
      this.formValidado.emit(false);
      return this.msgErro = true;
    }
    soma = 0
    for (var i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ){
      this.formValidado.emit(false);
      return this.msgErro = true;
    }
    this.formValidado.emit(true);
    return this.msgErro = false;
}
}
