import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private servicioService: ServicioService) {
    this.formulario = new FormGroup({
      titulo: new FormControl,
      texto: new FormControl,
      autor: new FormControl,
      imagen: new FormControl,
      fecha: new FormControl,
      categoria: new FormControl,
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    // console.log(this.formulario.value); OK 
    this.servicioService.agregarPost(this.formulario.value); // OK
  }

}
