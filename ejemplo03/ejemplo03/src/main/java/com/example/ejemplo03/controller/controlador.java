

package com.example.ejemplo03.controller;

import java.util.List;

import com.example.ejemplo03.model.Usuario;
import com.example.ejemplo03.services.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/user"})
public class controlador {

    @Autowired
    PersonaService service;

    @GetMapping
    public List<Usuario>listar(){
        return service.getUsers();
    }


  @PostMapping()
  public Usuario addUser(@RequestBody Usuario user) {

    return service.add(user);
  }
  @DeleteMapping()
  public void deleteUser(@PathVariable int id){
    service.delete(id);
  }
}
