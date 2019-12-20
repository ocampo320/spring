package com.example.ejemplo03;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface personaRepositorio extends Repository<Persona, Integer>{
	List<Persona>findAll();
    Persona findById(int id);
    Persona save(Persona p);
    void delete(Persona p);
	
	

}
