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
  public usuarios = [];
  public headElements = ["id", "name", "apelido"];
  public usuarioIndice = null;

  public nombreInput = "";
  constructor(private router:Router,private service:ServiceService ) { }

  ngOnInit() {
  }

  guardar(nombre:string,apellido:string)
  {

    this.per.name=nombre;
    this.per.apelido=apellido;

      this.service.createPersona(this.per).subscribe(data=>{alert("se ingreso con exito");
      console.log("objeto per "+this.per)
      console.log("Nombre ingresado  "+this.per.name)
      console.log("apellido ingresado  "+this.per.apelido)
      this.router.navigate(["listar"])
      })
    
    }


    createUsuario(): void {
      this.usuarioIndice = null;
      const nuevoUsuario: any = {
        nombre: this.nombreInput || ""
      };
      console.log("click createUsuario === ", { nuevoUsuario });
      this.service.createUsuario(nuevoUsuario).subscribe(data => {
        console.log({ data });
        this.router.navigate(["listar"])
      });
    }


  }


