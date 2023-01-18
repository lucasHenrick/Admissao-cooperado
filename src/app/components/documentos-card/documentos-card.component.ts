import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos-card',
  templateUrl: './documentos-card.component.html',
  styleUrls: ['./documentos-card.component.scss']
})
export class DocumentosCardComponent implements OnInit {


  @Input()
  public tituloCard: string = '';
  @Input()
  public subTituloCard: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
