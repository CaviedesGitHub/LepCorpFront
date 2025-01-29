export class Consulta {
    contacto: string;
    empresa: string;
    correo: string;
    celular: string;
    mensaje: string;
  
    constructor(contacto: string, empresa: string, correo: string, celular: string, mensaje: string){
        this.contacto = contacto;
        this.empresa = empresa;
        this.correo = correo;
        this.celular = celular;
        this.mensaje = mensaje;
      }
}

