

package com.example.ejemplo03.controller;

import java.util.List;

import com.example.ejemplo03.model.Usuario;
import com.example.ejemplo03.services.personaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping({"/personas"})
public class controlador {

    @Autowired
    personaService service;

    @GetMapping
    public List<Usuario>listar(){
        return service.listar();
    }

  @PostMapping()
  public Usuario addUser(@RequestBody Usuario user) {

    return service.add(user);
  }
}
