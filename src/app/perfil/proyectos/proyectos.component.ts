import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos = [
    {
      id: 1,
      proyecto: 'Sistema de facturacion',
      imgUrl: '',
      desc: '',
      githubUrl: '',
      liveDemoUrl: '',
      techs: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
