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


  per:Persona=new Persona()

  constructor(private router:Router,private service:ServiceService ) { }

  ngOnInit() {
  }

  guardar()
  {

    

      this.service.createPersona(this.per).subscribe(data=>{alert("se ingreso con exito");
      console.log("objeto per "+this.per)
      console.log("Nombre ingresado  "+this.per.name)
      console.log("apellido ingresado  "+this.per.apelido)
      this.router.navigate(["listar"])
      })
    
    }


  }


