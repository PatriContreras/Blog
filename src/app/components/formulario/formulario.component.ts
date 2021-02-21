import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from 'src/app/servicio.service';

declare var Swal;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private servicioService: ServicioService) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
        Validators.required
      ]),
      fecha: new FormControl(),
      categoria: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.servicioService.agregarPost(this.formulario.value); // OK
    //console.log(this.formulario.value);
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: '¡Has añadido un nuevo post!',
      showConfirmButton: false,
      timer: 1500
    })

  }

  checkValidator(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;

  }


}
