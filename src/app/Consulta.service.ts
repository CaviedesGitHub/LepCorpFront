import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Consulta } from './Consulta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createConsulta(consulta: Consulta): Observable<Consulta> {
    console.log('=========')
    console.log(this.apiUrl)
    console.log('=========')
    return this.http.post<Consulta>(this.apiUrl+'/consultas', consulta);
  }

}
