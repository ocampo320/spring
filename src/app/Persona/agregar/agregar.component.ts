import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from 'src/app/Service/service.service';
import { Persona } from 'src/app/modelo/Persona';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService ) { }

  ngOnInit() {
  }

  guardar(persona:Persona){
this.service.createPersona(persona)   
.subscribe(data=>{
  alert("Se ingreso con exito");
  this.router.navigate(["listar"]);


})

}

  }


