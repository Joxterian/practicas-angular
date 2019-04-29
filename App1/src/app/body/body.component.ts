import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  listaPersonajes = [
    'elem1',
    'elem2',
    'elem3'
  ];
  mostrar = true;
  frase:any = {
    mensaje: 'Un gran poder conlleva una gran responsabilidad.',
    autor: 'Tio de Piter Parker'
  };
  constructor() { }

  ngOnInit() {
  }

}
