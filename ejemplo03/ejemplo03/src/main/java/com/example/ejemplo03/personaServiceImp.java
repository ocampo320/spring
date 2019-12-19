package com.example.ejemplo03;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class personaServiceImp implements personaService {
	
@Autowired
private personaRepositorio repositorio;

@Override
public List<Persona> listar() {
	// TODO Auto-generated method stub
	return repositorio.findAll();
}

@Override
public Persona listarId(int id) {
	// TODO Auto-generated method stub
	return null;
}

@Override
public Persona add(Persona p) {
	// TODO Auto-generated method stub
	return null;
}

@Override
public Persona edit(Persona p) {
	// TODO Auto-generated method stub
	return null;
}

@Override
public Persona delete(int id) {
	// TODO Auto-generated method stub
	return null;
}
	
	

}
