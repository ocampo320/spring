import { Injectable}from'@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Persona } from '../modelo/Persona';
import { Observable } from "rxjs";
import { stringify } from '@angular/compiler/src/util';

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

//recibe de service, el id y concatena a la url
getPersonaId(id:number) 
{
  console.log("recibe en service "+ id)
return this.http.get<Persona>(this.url+"/"+id)

}

//
updatePersona(per:Persona)
{
  console.log(per)
return this.http.put<Persona>(this.url+"/"+per.id,per)
}

}
