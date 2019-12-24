import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  

  constructor(private router:Router,private service:ServiceService) { }



  ngOnInit() {
    this.Editar();
  }
  /*
  Editarw(){

    let id=localStorage.getItem("id");
    console.log("en editar.ts "+ id)
    this.service.getPersonaId()
    .subscribe(data=>{
      this.persona=data;
    })

  }*/

  persona :Persona=new Persona();

  /*
  editar recibe de listar el id que va viajando o esta aun en el localstorage y 
  toma el valor especifico id, este id lo pasa al metodo getpersonaid de el componente service
  que recibe un parametro de tipo numero
  el data de este componente me trae lod datos del objeto persona

  
  +*/
  Editar(){
    let id=localStorage.getItem("id");
    console.log("en editar.ts "+ id)
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })
    console.log("en editar.ts 2 "+ id)

  }
}
