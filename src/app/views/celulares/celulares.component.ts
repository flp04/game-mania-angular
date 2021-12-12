import { Component, OnInit } from '@angular/core';
import { Celular } from './celular';

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})


export class CelularesComponent implements OnInit {
  public celulares!: Celular[];
  
  constructor() { }
  
  ngOnInit(): void {
    this.celulares = [{
      nome: 'Apple Iphone 7 Plus',
      img: 'assets/imgs/produto01.jpg'
    },{
      nome: "Motorola G9",
      img: "assets/imgs/produto02.jpg"
    },{
      nome: "Samsung J8",
      img: "assets/imgs/produto03.jpg"
    }
  ]
  }

}
