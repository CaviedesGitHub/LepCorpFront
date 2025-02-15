import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ConsultaService } from '../Consulta.service';
import { Consulta } from '../Consulta';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  consultaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private consultaService: ConsultaService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.consultaForm = this.formBuilder.group({
      contacto: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(35)]],
      empresa: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      correo: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      celular: ["", [Validators.required, Validators.pattern("[- +()0-9]{10,15}")]],
      mensaje: ["", [Validators.required, Validators.maxLength(500)]]
    })  
  }
  //   ^(?!0+$)(?:\(?\+\d{1,3}\)?[- ]?|0)?\d{10}$
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

}
