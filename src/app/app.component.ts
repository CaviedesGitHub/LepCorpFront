import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Consulta } from './Consulta';
import { ConsultaService } from './Consulta.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lepcorpsas1';
  consultaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private consultaService: ConsultaService,
    //private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#btnAbrir").on('click', function(){
        alert("Mensaje desde el boton");
      })
    });

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
      //this.toastr.success("Confirmation", "Query created")
      this.consultaForm.reset();
    })

  }

  cancelCreation(){
    this.consultaForm.reset();
 }
}
