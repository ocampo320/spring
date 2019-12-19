import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  url='http://localhost:8182/ejemplo03/personas';

  getpersonas()
  {
    return this.http.get<Persona[]>(this.url);

  }

  createPersona(persona:Persona)
  {
    return this.http.post<Persona>(this.url,persona)
    


  }
}
