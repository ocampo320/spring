package com.example.ejemplo03;

import java.util.List;

public interface personaService {

	List<Persona>listar();
    Persona listarId(int id);
    Persona add(Persona p);
    Persona edit(Persona p);
    Persona delete(int id);
	
	
	
	
}
