import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Consulta } from './Consulta';
import { ConsultaService } from './Consulta.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lepcorpsas1';
  localesList = [
    { code: "en-US", label: 'English' },
    { code: "es", label: 'Spanish' }
  ];
  consultaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private consultaService: ConsultaService,
    private toastr: ToastrService,
    private enrutador: Router
  ) { }

  ngOnInit(): void {
    //$(document).ready(function(){
    //  $("#btnAbrir").on('click', function(){
    //    alert("Mensaje desde el boton");
    //  })
    //});

    this.consultaForm = this.formBuilder.group({
      contacto: ["", [Validators.required, Validators.minLength(2)]],
      empresa: ["", [Validators.required, Validators.minLength(2)]],
      correo: ["", [Validators.required, Validators.minLength(2)]],
      celular: ["", [Validators.required, Validators.minLength(10)]],
      mensaje: ["", [Validators.required, Validators.maxLength(200)]]
    })
  }

  createConsulta(consulta: Consulta){
    this.consultaService.createConsulta(consulta).subscribe(consulta=>{
      console.info("The Query was created: ", consulta)
      this.toastr.success("Muchas gracias por comunicarse con nosotros. En breve tiempo lo estaremos contactando.", "Mensaje recibido.")
      this.consultaForm.reset();
    },
    error => {
      console.info("El mensaje no fue recibido: ", consulta)
      this.toastr.error("Por fallas tecnicas no pudimos recibir su mensaje. Por favor vuelva a intentarlo mas tarde.", "Mensaje NO recibido.")
      //this.consultaForm.reset();
    })

  }

  cancelCreation(){
    this.consultaForm.reset();
 }

 goHome(){
    this.enrutador.navigate([``])
 }

 logout(): void {
    //sessionStorage.setItem("creado", "NO")
}
}
