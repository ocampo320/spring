import { Injectable}from'@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Persona } from '../modelo/Persona';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  url='http://localhost:8081/ejemplo03/personas';

  getpersonas()
  {
    return this.http.get<Persona[]>(this.url);

  }

  createPersona(per:Persona) : Observable<Persona>{
    console.log("en service recibe el nombre "+per.name)
    console.log("en service recibe el apellido "+per.apelido)
console.log("en servicio se recibe el objeto "+per)
   
    return this.http.post<Persona>(this.url,per);
  }


  createUsuario(per: Persona):Observable<Persona> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })  
    };
    return this.http.post<Persona>(
      this.url,
      per,
      httpOptions
    );
}
}