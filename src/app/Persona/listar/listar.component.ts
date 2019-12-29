import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[];

 

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getpersonas()
   
      .subscribe(data => {
        this.personas = data;
        console.log(data)
      });
  }

  

  Editar(persona:Persona):void{
  
   
    
    localStorage.setItem("id_usuario",persona.id.toString());

    console.log('se presiono  el btn editar' + persona.id)
    this.router.navigate(["edit"]);
  }



  /*recibe del formulario el valor del input, o el obejto capturado
  el localstorage le da al objeto per lo que esta en la sesion en el momento
  que son los datos del objeto, pero en este caso, solo envia el id, luego con el router 
  nos pasamos al foemulario edit
  */
  consulta( per:Persona):void
  {

    console.log("preciono el btn actualizar en listart.html y el id es "+ per)
    localStorage.setItem("id",per.toString());
   
   // this.router.navigate(["edit"]);
   this.router.navigate(["edit"])
    
  }
  

}






