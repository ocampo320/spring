package com.example.ejemplo03.services;

import com.example.ejemplo03.model.Usuario;

import java.util.List;

public interface personaService {

	List<Usuario>listar();
    Usuario listarId(int id);
    Usuario add(Usuario p);
    Usuario edit(Usuario p);
    Usuario delete(int id);




}
